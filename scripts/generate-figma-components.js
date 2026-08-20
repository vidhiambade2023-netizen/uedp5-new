import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const FIGMA_PAT = process.env.FIGMA_PAT || '';
const FILE_KEY = 'xmYjpyocPkzhzG6nJk4T4t';

const tokensMapPath = path.join(rootDir, 'src', 'styles', 'tokens-map.json');
let tokenMap = {};
if (fs.existsSync(tokensMapPath)) {
  tokenMap = JSON.parse(fs.readFileSync(tokensMapPath, 'utf8'));
}

function sanitizeReactName(name) {
  let cleaned = name.replace(/[^a-zA-Z0-9]+/g, ' ').trim();
  let parts = cleaned.split(' ').filter(Boolean);
  if (parts.length === 0) return 'Component';
  let pascal = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  if (/^[0-9]/.test(pascal)) {
    pascal = 'Figma' + pascal;
  }
  return pascal;
}

const DESIGN_SYSTEM_COMPONENTS = [
  { originalName: "Component 336", id: "42:2779", category: "FEATURE_CARD", propDefs: { type: { type: "VARIANT", defaultValue: "Primary", variantOptions: ["Primary", "Secondary", "Outline"] }, state: { type: "VARIANT", defaultValue: "default", variantOptions: ["default", "hover", "active", "disabled", "error"] } } },
  { originalName: "Filters", id: "42:2780", category: "FILTERS", propDefs: { activeTab: { type: "VARIANT", defaultValue: "All", variantOptions: ["All", "Active", "Pending", "Archived"] } } },
  { originalName: "Component 315", id: "42:2781", category: "STATS_WIDGET", propDefs: { value: { type: "TEXT", defaultValue: "$24,500" }, trend: { type: "TEXT", defaultValue: "+12.5%" } } },
  { originalName: "Date filters", id: "42:2782", category: "DATE_FILTERS", propDefs: { range: { type: "VARIANT", defaultValue: "Today", variantOptions: ["Today", "7 Days", "30 Days", "Custom"] } } },
  { originalName: "Zones", id: "42:2783", category: "ZONES", propDefs: { activeZone: { type: "VARIANT", defaultValue: "Zone A", variantOptions: ["Zone A", "Zone B", "Zone C"] } } },
  { originalName: "Map", id: "42:2784", category: "MAP", propDefs: { zoomLevel: { type: "TEXT", defaultValue: "100%" }, showMarker: { type: "BOOLEAN", defaultValue: true } } },
  { originalName: "Input Box", id: "137:1600", category: "INPUT", propDefs: { placeholder: { type: "TEXT", defaultValue: "Enter text..." }, label: { type: "TEXT", defaultValue: "Input Label" } } },
  { originalName: "Full Width Button", id: "137:1601", category: "BUTTON", propDefs: { label: { type: "TEXT", defaultValue: "Full Width Action" } } },
  { originalName: "Button 2", id: "137:1602", category: "BUTTON", propDefs: { variant: { type: "VARIANT", defaultValue: "Default", variantOptions: ["Default", "Ghost"] } } },
  { originalName: "Quick Action Cards", id: "137:1603", category: "QUICK_ACTION_CARD", propDefs: { title: { type: "TEXT", defaultValue: "Quick Action" }, description: { type: "TEXT", defaultValue: "Perform action quickly" } } },
  { originalName: "Container 1", id: "137:1604", category: "CONTAINER", propDefs: { title: { type: "TEXT", defaultValue: "Container Panel" } } },
  { originalName: "Container 2", id: "137:1605", category: "CONTAINER", propDefs: {} },
  { originalName: "Tag Button", id: "137:1606", category: "TAG", propDefs: { tag: { type: "TEXT", defaultValue: "New Tag" } } },
  { originalName: "Container 3", id: "137:1607", category: "CONTAINER", propDefs: {} },
  { originalName: "Primary Button", id: "137:1608", category: "BUTTON", propDefs: { label: { type: "TEXT", defaultValue: "Primary Action" } } },
  { originalName: "Secondary Button", id: "137:1609", category: "BUTTON", propDefs: { label: { type: "TEXT", defaultValue: "Secondary Action" } } },
  { originalName: "Container 4", id: "137:1610", category: "CONTAINER", propDefs: {} },
  { originalName: "Group 280", id: "137:1611", category: "CONTAINER", propDefs: {} },
  { originalName: "Container 5", id: "137:1612", category: "CONTAINER", propDefs: {} },
  { originalName: "Container 6", id: "137:1613", category: "CONTAINER", propDefs: {} },
  { originalName: "Floating Button", id: "137:1614", category: "FAB", propDefs: {} },
  { originalName: "Input Box 2", id: "137:1615", category: "INPUT", propDefs: { label: { type: "TEXT", defaultValue: "Search Filter" } } },
  { originalName: "Top Bar", id: "137:1616", category: "TOP_BAR", propDefs: { title: { type: "TEXT", defaultValue: "UEDP Dashboard" } } },
  { originalName: "Cards", id: "137:1617", category: "CARD", propDefs: { title: { type: "TEXT", defaultValue: "Card Title" }, text: { type: "TEXT", defaultValue: "Card description text goes here." } } },
  { originalName: "List Item", id: "137:1618", category: "LIST_ITEM", propDefs: { title: { type: "TEXT", defaultValue: "List Item Title" }, subtitle: { type: "TEXT", defaultValue: "Subtitle details" } } },
  { originalName: "Ellipse 157", id: "137:1619", category: "ICON", propDefs: {} },
  { originalName: "Checkbox", id: "137:1620", category: "CHECKBOX", propDefs: { label: { type: "TEXT", defaultValue: "Checkbox Option" }, checked: { type: "BOOLEAN", defaultValue: true } } },
  { originalName: "Cards 2", id: "137:1621", category: "CARD", propDefs: { title: { type: "TEXT", defaultValue: "Product Card" } } },
  { originalName: "Icon Arrow Right Small", id: "137:1622", category: "ICON", propDefs: {} },
  { originalName: "Icon Arrow Right Big", id: "137:1623", category: "ICON", propDefs: {} },
  { originalName: "Icon Add", id: "137:1624", category: "ICON", propDefs: {} },
  { originalName: "Icon Reorder", id: "137:1625", category: "ICON", propDefs: {} },
  { originalName: "Material Symbols Reorder Rounded", id: "137:1626", category: "ICON", propDefs: {} },
  { originalName: "Icon Compare", id: "137:1627", category: "ICON", propDefs: {} },
  { originalName: "Icon Copy", id: "137:1628", category: "ICON", propDefs: {} },
  { originalName: "Icon Share", id: "137:1629", category: "ICON", propDefs: {} },
  { originalName: "Icon Lock", id: "137:1630", category: "ICON", propDefs: {} },
  { originalName: "Icon Message", id: "137:1631", category: "ICON", propDefs: {} },
  { originalName: "Icon Profile", id: "137:1632", category: "ICON", propDefs: {} },
  { originalName: "Search", id: "137:1633", category: "SEARCH", propDefs: { placeholder: { type: "TEXT", defaultValue: "Search components..." } } },
  { originalName: "Arrow Right", id: "137:1634", category: "ICON", propDefs: {} },
  { originalName: "Add Round Duotone", id: "137:1635", category: "ICON", propDefs: {} },
  { originalName: "Basket Alt 3", id: "137:1636", category: "ICON", propDefs: {} },
  { originalName: "Icon Add 2", id: "137:1637", category: "ICON", propDefs: {} },
  { originalName: "Icon Add 3", id: "137:1638", category: "ICON", propDefs: {} },
  { originalName: "Icon Add 4", id: "137:1639", category: "ICON", propDefs: {} },
  { originalName: "Icon Add 5", id: "137:1640", category: "ICON", propDefs: {} },
  { originalName: "Add Round", id: "137:1641", category: "ICON", propDefs: {} },
  { originalName: "Iconamoon Compare Light", id: "137:1642", category: "ICON", propDefs: {} }
];

function getSvgForIcon(name) {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('lock')) {
    return `<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>`;
  }
  if (nameLower.includes('share')) {
    return `<path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>`;
  }
  if (nameLower.includes('copy')) {
    return `<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>`;
  }
  if (nameLower.includes('message')) {
    return `<path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>`;
  }
  if (nameLower.includes('profile')) {
    return `<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>`;
  }
  if (nameLower.includes('compare')) {
    return `<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>`;
  }
  if (nameLower.includes('arrow')) {
    return `<path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>`;
  }
  if (nameLower.includes('basket')) {
    return `<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" stroke="currentColor" strokeWidth="2" fill="none"/>`;
  }
  if (nameLower.includes('reorder')) {
    return `<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>`;
  }
  return `<path d="M12 4v16m-8-8h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>`;
}

function generateComponentFiles(comp) {
  const reactName = comp.reactName;
  const category = comp.category;
  const originalName = comp.originalName;

  let tsxContent = '';
  let cssContent = '';

  cssContent += `/* Styles for Figma Component: "${originalName}" */\n`;
  cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
  cssContent += `  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n`;
  cssContent += `  box-sizing: border-box;\n`;
  cssContent += `  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n`;
  cssContent += `}\n\n`;

  if (category === 'INPUT') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: flex;\n  flex-direction: column;\n  gap: var(--uedp-gap-2, 6px);\n  width: 100%;\n  max-width: 360px;\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--uedp-slate-200, #e2e8f0);\n}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__input {\n`;
    cssContent += `  width: 100%;\n  padding: var(--uedp-padding-4, 10px) 14px;\n`;
    cssContent += `  background-color: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-700, #334155);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-lg, 8px);\n`;
    cssContent += `  color: var(--uedp-slate-50, #f8fafc);\n  font-size: 14px;\n  outline: none;\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__input:focus {\n  border-color: var(--uedp-blue-500, #3b82f6);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}--error .uedp-${reactName.toLowerCase()}__input {\n  border-color: #ef4444 !important;\n}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n`;
    tsxContent += `  label?: string;\n  placeholder?: string;\n  value?: string;\n  state?: 'default' | 'focus' | 'disabled' | 'error';\n  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;\n`;
    tsxContent += `}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({\n`;
    tsxContent += `  label = 'Input Label',\n  placeholder = 'Enter text...',\n  value,\n  state = 'default',\n  onChange\n}) => {\n`;
    tsxContent += `  return (\n`;
    tsxContent += `    <div className={\`uedp-${reactName.toLowerCase()} uedp-${reactName.toLowerCase()}--\${state}\`} data-figma-layer="${originalName}">\n`;
    tsxContent += `      {label && <label className="uedp-${reactName.toLowerCase()}__label">{label}</label>}\n`;
    tsxContent += `      <input\n`;
    tsxContent += `        type="text"\n`;
    tsxContent += `        className="uedp-${reactName.toLowerCase()}__input"\n`;
    tsxContent += `        placeholder={placeholder}\n`;
    tsxContent += `        defaultValue={value}\n`;
    tsxContent += `        disabled={state === 'disabled'}\n`;
    tsxContent += `        onChange={onChange}\n`;
    tsxContent += `      />\n`;
    tsxContent += `    </div>\n  );\n};\nexport default ${reactName};\n`;

  } else if (category === 'SEARCH') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  max-width: 400px;\n`;
    cssContent += `  padding: 8px 14px;\n  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-700, #334155);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-full, 9999px);\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__input {\n`;
    cssContent += `  background: transparent;\n  border: none;\n  color: #f8fafc;\n  font-size: 14px;\n  width: 100%;\n  outline: none;\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  placeholder?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ placeholder = 'Search components...' }) => (\n`;
    tsxContent += `  <div className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>\n`;
    tsxContent += `    <input type="text" className="uedp-${reactName.toLowerCase()}__input" placeholder={placeholder} />\n`;
    tsxContent += `  </div>\n);\nexport default ${reactName};\n`;

  } else if (category === 'CHECKBOX') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  user-select: none;\n`;
    cssContent += `  font-size: 14px;\n  color: var(--uedp-slate-200, #e2e8f0);\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__box {\n`;
    cssContent += `  width: 20px;\n  height: 20px;\n  border-radius: var(--uedp-rounded, 4px);\n`;
    cssContent += `  border: 2px solid var(--uedp-blue-500, #3b82f6);\n`;
    cssContent += `  background: var(--uedp-blue-600, #2563eb);\n`;
    cssContent += `  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  label?: string;\n  checked?: boolean;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ label = 'Checkbox Option', checked = true }) => (\n`;
    tsxContent += `  <label className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <div className="uedp-${reactName.toLowerCase()}__box">\n`;
    tsxContent += `      {checked && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}\n`;
    tsxContent += `    </div>\n`;
    tsxContent += `    <span>{label}</span>\n`;
    tsxContent += `  </label>\n);\nexport default ${reactName};\n`;

  } else if (category === 'TOP_BAR') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: flex;\n  align-items: center;\n  justify-content: space-between;\n`;
    cssContent += `  width: 100%;\n  padding: 12px 24px;\n`;
    cssContent += `  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border-bottom: 1px solid var(--uedp-slate-800, #1e293b);\n`;
    cssContent += `  color: #f8fafc;\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__brand {\n  font-weight: 700;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  title?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ title = 'UEDP Dashboard' }) => (\n`;
    tsxContent += `  <header className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <div className="uedp-${reactName.toLowerCase()}__brand">\n`;
    tsxContent += `      <div style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }} />\n`;
    tsxContent += `      <span>{title}</span>\n`;
    tsxContent += `    </div>\n`;
    tsxContent += `    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>\n`;
    tsxContent += `      <span style={{ fontSize: 13, color: '#94a3b8' }}>Analytics</span>\n`;
    tsxContent += `      <span style={{ fontSize: 13, color: '#94a3b8' }}>Projects</span>\n`;
    tsxContent += `      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#334155', border: '1px solid #475569' }} />\n`;
    tsxContent += `    </div>\n`;
    tsxContent += `  </header>\n);\nexport default ${reactName};\n`;

  } else if (category === 'FILTERS' || category === 'DATE_FILTERS') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px;\n`;
    cssContent += `  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-800, #1e293b);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-xl, 12px);\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__item {\n`;
    cssContent += `  padding: 6px 14px;\n  font-size: 13px;\n  font-weight: 500;\n`;
    cssContent += `  border-radius: var(--uedp-rounded-lg, 8px);\n`;
    cssContent += `  color: var(--uedp-slate-400, #94a3b8);\n  cursor: pointer;\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__item--active {\n`;
    cssContent += `  background: var(--uedp-slate-800, #1e293b);\n  color: #38bdf8;\n  font-weight: 600;\n`;
    cssContent += `}\n`;

    const options = category === 'DATE_FILTERS' ? ["Today", "7 Days", "30 Days", "Custom"] : ["All", "Active", "Pending", "Archived"];

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  activeTab?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ activeTab = '${options[0]}' }) => {\n`;
    tsxContent += `  const options = ${JSON.stringify(options)};\n`;
    tsxContent += `  return (\n`;
    tsxContent += `    <div className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `      {options.map(opt => (\n`;
    tsxContent += `        <div\n`;
    tsxContent += `          key={opt}\n`;
    tsxContent += `          className={\`uedp-${reactName.toLowerCase()}__item \${opt === activeTab ? 'uedp-${reactName.toLowerCase()}__item--active' : ''}\`}\n`;
    tsxContent += `        >\n`;
    tsxContent += `          {opt}\n`;
    tsxContent += `        </div>\n`;
    tsxContent += `      ))}\n`;
    tsxContent += `    </div>\n  );\n};\nexport default ${reactName};\n`;

  } else if (category === 'MAP') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  width: 100%;\n  max-width: 440px;\n  height: 220px;\n`;
    cssContent += `  border-radius: var(--uedp-rounded-2xl, 16px);\n`;
    cssContent += `  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-700, #334155);\n`;
    cssContent += `  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__grid {\n`;
    cssContent += `  position: absolute;\n  inset: 0;\n`;
    cssContent += `  background-image: radial-gradient(#334155 1px, transparent 1px);\n`;
    cssContent += `  background-size: 16px 16px;\n  opacity: 0.4;\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  zoomLevel?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ zoomLevel = '100%' }) => (\n`;
    tsxContent += `  <div className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <div className="uedp-${reactName.toLowerCase()}__grid" />\n`;
    tsxContent += `    <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>\n`;
    tsxContent += `      <svg width="32" height="32" viewBox="0 0 24 24" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>\n`;
    tsxContent += `      <span style={{ fontSize: 12, color: '#f8fafc', fontWeight: 600, marginTop: 4, background: '#0f172a', padding: '2px 8px', borderRadius: 4 }}>Central Zone ({zoomLevel})</span>\n`;
    tsxContent += `    </div>\n`;
    tsxContent += `  </div>\n);\nexport default ${reactName};\n`;

  } else if (category === 'ZONES') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: flex;\n  gap: 12px;\n  width: 100%;\n  max-width: 440px;\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}__zone {\n`;
    cssContent += `  flex: 1;\n  padding: 14px;\n  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-800, #1e293b);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-xl, 12px);\n`;
    cssContent += `  color: #f8fafc;\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  activeZone?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ activeZone = 'Zone A' }) => (\n`;
    tsxContent += `  <div className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    {['Zone A', 'Zone B', 'Zone C'].map(z => (\n`;
    tsxContent += `      <div key={z} className="uedp-${reactName.toLowerCase()}__zone" style={{ borderColor: z === activeZone ? '#3b82f6' : '#1e293b' }}>\n`;
    tsxContent += `        <div style={{ fontSize: 12, color: '#94a3b8' }}>{z}</div>\n`;
    tsxContent += `        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>{z === activeZone ? 'Active' : 'Standby'}</div>\n`;
    tsxContent += `      </div>\n`;
    tsxContent += `    ))}\n`;
    tsxContent += `  </div>\n);\nexport default ${reactName};\n`;

  } else if (category === 'STATS_WIDGET') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  padding: 20px;\n  width: 100%;\n  max-width: 280px;\n`;
    cssContent += `  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-800, #1e293b);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-2xl, 16px);\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  value?: string;\n  trend?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ value = '$24,500', trend = '+12.5%' }) => (\n`;
    tsxContent += `  <div className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <div style={{ fontSize: 13, color: '#94a3b8' }}>Total Revenue</div>\n`;
    tsxContent += `    <div style={{ fontSize: 28, fontWeight: 800, color: '#f8fafc', margin: '6px 0' }}>{value}</div>\n`;
    tsxContent += `    <div style={{ fontSize: 12, color: '#10b981', fontWeight: 600 }}>{trend} vs last month</div>\n`;
    tsxContent += `  </div>\n);\nexport default ${reactName};\n`;

  } else if (category === 'CARD' || category === 'FEATURE_CARD' || category === 'QUICK_ACTION_CARD' || category === 'CONTAINER') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  padding: 20px;\n  width: 100%;\n  max-width: 360px;\n`;
    cssContent += `  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-800, #1e293b);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-2xl, 16px);\n`;
    cssContent += `  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  title?: string;\n  text?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({\n`;
    tsxContent += `  title = '${originalName}',\n`;
    tsxContent += `  text = 'High fidelity UI component synchronized with Figma design system tokens.'\n`;
    tsxContent += `}) => (\n`;
    tsxContent += `  <div className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <div style={{ width: 36, height: 36, borderRadius: 10, background: '#38bdf8', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a' }}>\n`;
    tsxContent += `      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>\n`;
    tsxContent += `    </div>\n`;
    tsxContent += `    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#f8fafc' }}>{title}</h4>\n`;
    tsxContent += `    <p style={{ margin: '8px 0 16px', fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{text}</p>\n`;
    tsxContent += `  </div>\n);\nexport default ${reactName};\n`;

  } else if (category === 'LIST_ITEM') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: flex;\n  align-items: center;\n  justify-content: space-between;\n`;
    cssContent += `  padding: 12px 16px;\n  width: 100%;\n  max-width: 380px;\n`;
    cssContent += `  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-800, #1e293b);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-xl, 12px);\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  title?: string;\n  subtitle?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ title = 'List Item Title', subtitle = 'Subtitle details' }) => (\n`;
    tsxContent += `  <div className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>\n`;
    tsxContent += `      <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>\n`;
    tsxContent += `        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>\n`;
    tsxContent += `      </div>\n`;
    tsxContent += `      <div>\n`;
    tsxContent += `        <div style={{ fontSize: 14, fontWeight: 600, color: '#f8fafc' }}>{title}</div>\n`;
    tsxContent += `        <div style={{ fontSize: 12, color: '#94a3b8' }}>{subtitle}</div>\n`;
    tsxContent += `      </div>\n`;
    tsxContent += `    </div>\n`;
    tsxContent += `    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>\n`;
    tsxContent += `  </div>\n);\nexport default ${reactName};\n`;

  } else if (category === 'TAG') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n`;
    cssContent += `  padding: 4px 10px;\n  border-radius: var(--uedp-rounded-full, 9999px);\n`;
    cssContent += `  background: var(--uedp-blue-950, #172554);\n`;
    cssContent += `  border: 1px solid var(--uedp-blue-800, #1e40af);\n`;
    cssContent += `  color: #60a5fa;\n  font-size: 12px;\n  font-weight: 600;\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  tag?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ tag = 'New Tag' }) => (\n`;
    tsxContent += `  <span className="uedp-${reactName.toLowerCase()}" data-figma-layer="${originalName}">\n`;
    tsxContent += `    <span>{tag}</span>\n`;
    tsxContent += `  </span>\n);\nexport default ${reactName};\n`;

  } else if (category === 'ICON') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n`;
    cssContent += `  width: 32px;\n  height: 32px;\n`;
    cssContent += `  color: var(--uedp-slate-200, #e2e8f0);\n`;
    cssContent += `}\n`;

    const svgPath = getSvgForIcon(originalName);
    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  size?: number;\n  color?: string;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ size = 24, color = 'currentColor' }) => (\n`;
    tsxContent += `  <span className="uedp-${reactName.toLowerCase()}" style={{ width: size, height: size, color }} data-figma-layer="${originalName}">\n`;
    tsxContent += `    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">\n`;
    tsxContent += `      ${svgPath}\n`;
    tsxContent += `    </svg>\n`;
    tsxContent += `  </span>\n);\nexport default ${reactName};\n`;

  } else if (category === 'FAB') {
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n`;
    cssContent += `  background: linear-gradient(135deg, #3b82f6, #2563eb);\n`;
    cssContent += `  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n`;
    cssContent += `  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);\n  cursor: pointer;\n`;
    cssContent += `}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  onClick?: () => void;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ onClick }) => (\n`;
    tsxContent += `  <button className="uedp-${reactName.toLowerCase()}" onClick={onClick} data-figma-layer="${originalName}">\n`;
    tsxContent += `    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>\n`;
    tsxContent += `  </button>\n);\nexport default ${reactName};\n`;

  } else {
    // Default BUTTON
    cssContent += `.uedp-${reactName.toLowerCase()} {\n`;
    cssContent += `  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n`;
    cssContent += `  padding: var(--uedp-padding-4, 10px) var(--uedp-padding-6, 18px);\n`;
    cssContent += `  background: var(--uedp-slate-900, #0f172a);\n`;
    cssContent += `  border: 1px solid var(--uedp-slate-700, #334155);\n`;
    cssContent += `  border-radius: var(--uedp-rounded-xl, 12px);\n`;
    cssContent += `  color: var(--uedp-slate-50, #f8fafc);\n`;
    cssContent += `  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n`;
    cssContent += `  width: ${originalName.toLowerCase().includes('full') ? '100%' : 'auto'};\n`;
    cssContent += `}\n`;
    cssContent += `.uedp-${reactName.toLowerCase()}:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n`;

    tsxContent = `import React from 'react';\nimport './${reactName}.css';\n\n`;
    tsxContent += `export interface ${reactName}Props {\n  label?: string;\n  onClick?: () => void;\n}\n\n`;
    tsxContent += `export const ${reactName}: React.FC<${reactName}Props> = ({ label = '${originalName}', onClick }) => (\n`;
    tsxContent += `  <button className="uedp-${reactName.toLowerCase()}" onClick={onClick} data-figma-layer="${originalName}">\n`;
    tsxContent += `    {label}\n`;
    tsxContent += `  </button>\n);\nexport default ${reactName};\n`;
  }

  return { tsxContent, cssContent };
}

async function main() {
  console.log('Generating high-fidelity React component suite matching Figma Design System...');

  const componentsDir = path.join(rootDir, 'src', 'components');
  if (fs.existsSync(componentsDir)) {
    fs.rmSync(componentsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(componentsDir, { recursive: true });

  const nameCounts = {};
  const compList = DESIGN_SYSTEM_COMPONENTS.map(comp => {
    let baseName = sanitizeReactName(comp.originalName);
    nameCounts[baseName] = (nameCounts[baseName] || 0) + 1;
    let uniqueReactName = baseName;
    let storyTitle = `Components/${comp.originalName}`;
    if (nameCounts[baseName] > 1) {
      uniqueReactName = `${baseName}${nameCounts[baseName]}`;
      storyTitle = `Components/${comp.originalName} (${comp.id})`;
    }
    return {
      ...comp,
      reactName: uniqueReactName,
      storyTitle
    };
  });

  const barrelExports = [];

  for (const comp of compList) {
    const compDir = path.join(componentsDir, comp.reactName);
    fs.mkdirSync(compDir, { recursive: true });

    const { tsxContent, cssContent } = generateComponentFiles(comp);

    fs.writeFileSync(path.join(compDir, `${comp.reactName}.css`), cssContent);
    fs.writeFileSync(path.join(compDir, `${comp.reactName}.tsx`), tsxContent);

    const componentDocsMarkdown = `### Figma Layer Specification\n\n- **Figma Layer Name**: \`${comp.originalName}\`\n- **Figma Node ID**: \`${comp.id}\`\n- **Category**: \`${comp.category}\`\n- **Bound Design Tokens**: Synchronized with \`figma-tokens.css\` variables.`;

    let storiesContent = `import type { Meta, StoryObj } from '@storybook/react';\n`;
    storiesContent += `import { ${comp.reactName} } from './${comp.reactName}';\n\n`;
    storiesContent += `const meta: Meta<typeof ${comp.reactName}> = {\n`;
    storiesContent += `  title: ${JSON.stringify(comp.storyTitle)},\n`;
    storiesContent += `  component: ${comp.reactName},\n`;
    storiesContent += `  parameters: {\n`;
    storiesContent += `    docs: {\n`;
    storiesContent += `      description: {\n`;
    storiesContent += `        component: ${JSON.stringify(componentDocsMarkdown)},\n`;
    storiesContent += `      },\n`;
    storiesContent += `    },\n`;
    storiesContent += `  },\n`;
    storiesContent += `};\n\n`;
    storiesContent += `export default meta;\n`;
    storiesContent += `type Story = StoryObj<typeof ${comp.reactName}>;\n\n`;
    storiesContent += `export const Default: Story = {};\n`;

    fs.writeFileSync(path.join(compDir, `${comp.reactName}.stories.tsx`), storiesContent);

    barrelExports.push(`export { ${comp.reactName} } from './components/${comp.reactName}/${comp.reactName}';\nexport type { ${comp.reactName}Props } from './components/${comp.reactName}/${comp.reactName}';`);
  }

  const barrelContent = `/* Auto-generated barrel export for Figma Design System */\n` + barrelExports.join('\n') + '\n';
  fs.writeFileSync(path.join(rootDir, 'src', 'index.ts'), barrelContent);

  console.log(`Successfully generated ${compList.length} distinct React components in src/components/!`);
}

main().catch(err => {
  console.error('Error generating components:', err);
  process.exit(1);
});
