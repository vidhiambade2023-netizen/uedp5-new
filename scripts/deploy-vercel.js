import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- Vercel Build & Deployment Pre-check ---');

try {
  console.log('1. Checking vercel.json presence...');
  const vercelJsonPath = path.join(rootDir, 'vercel.json');
  if (!fs.existsSync(vercelJsonPath)) {
    throw new Error('vercel.json is missing in project root!');
  }
  console.log('✔ vercel.json validated.');

  console.log('2. Running TypeScript typecheck (npx tsc --noEmit)...');
  execSync('npx tsc --noEmit', { cwd: rootDir, stdio: 'inherit' });
  console.log('✔ TypeScript check passed cleanly.');

  console.log('3. Running Storybook static build (npm run build-storybook)...');
  execSync('npm run build-storybook', { cwd: rootDir, stdio: 'inherit' });

  const outputDir = path.join(rootDir, 'storybook-static');
  if (!fs.existsSync(outputDir) || !fs.existsSync(path.join(outputDir, 'index.html'))) {
    throw new Error('storybook-static output build was not created!');
  }
  console.log('✔ storybook-static bundle built successfully.');
  console.log('✔ Project is 100% ready for Vercel deployment!');

} catch (err) {
  console.error('❌ Vercel Deployment Check Failed:', err.message);
  process.exit(1);
}
