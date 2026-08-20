import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const baseTokensPath = path.join(rootDir, 'base-palette-tokens.json');
const foundationalTokensPath = path.join(rootDir, 'foundational-tokens.json');

const baseTokens = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
const foundationalTokens = JSON.parse(fs.readFileSync(foundationalTokensPath, 'utf8'));

const cssVariables = [];
const tokenMap = {}; // variableId -> { cssVar, value, name, category, group }

function sanitizeName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function processNode(node, currentPath = []) {
  if (!node || typeof node !== 'object') return;

  if (node['$extensions'] && node['$extensions']['com.figma.variableId']) {
    const varId = node['$extensions']['com.figma.variableId'];
    const type = node['$type'];
    let rawVal = node['$value'];
    
    // Format value
    let cssValue = rawVal;
    if (type === 'color' && typeof rawVal === 'object') {
      if (rawVal.hex) {
        cssValue = rawVal.hex;
      } else if (rawVal.components) {
        const [r, g, b] = rawVal.components;
        const a = rawVal.alpha !== undefined ? rawVal.alpha : 1;
        cssValue = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
      }
    } else if (type === 'number' && typeof rawVal === 'number') {
      // Check category for unit
      const pathStr = currentPath.join(' ').toLowerCase();
      if (pathStr.includes('border radius') || pathStr.includes('gap') || pathStr.includes('padding') || pathStr.includes('size') || pathStr.includes('spacing') || pathStr.includes('width') || pathStr.includes('height')) {
        cssValue = `${rawVal}px`;
      } else {
        cssValue = `${rawVal}`;
      }
    }

    let codeSyntaxWeb = node['$extensions']['com.figma.codeSyntax']?.['WEB'];
    let varName = codeSyntaxWeb ? sanitizeName(codeSyntaxWeb) : currentPath.map(sanitizeName).join('-');
    if (!varName.startsWith('uedp-')) {
      varName = `uedp-${varName}`;
    }
    const cssVarName = `--${varName}`;

    cssVariables.push({
      cssVar: cssVarName,
      value: cssValue,
      varId,
      path: currentPath
    });

    tokenMap[varId] = {
      cssVar: cssVarName,
      value: cssValue,
      varId,
      name: currentPath[currentPath.length - 1],
      group: currentPath[0],
      path: currentPath.join('/')
    };
    return;
  }

  for (const [key, val] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    processNode(val, [...currentPath, key]);
  }
}

processNode(baseTokens);
processNode(foundationalTokens);

// Create src/styles directory if not exists
const stylesDir = path.join(rootDir, 'src', 'styles');
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

let cssContent = `/* Auto-generated Figma CSS Tokens */\n:root {\n`;
cssVariables.forEach(v => {
  cssContent += `  ${v.cssVar}: ${v.value};\n`;
});
cssContent += `}\n`;

fs.writeFileSync(path.join(stylesDir, 'figma-tokens.css'), cssContent);
fs.writeFileSync(path.join(stylesDir, 'tokens-map.json'), JSON.stringify(tokenMap, null, 2));

console.log(`Successfully generated ${cssVariables.length} CSS tokens inside src/styles/figma-tokens.css`);
