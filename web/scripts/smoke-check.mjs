import { existsSync, readFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const requiredFiles = [
  'index.html',
  'src/main.tsx',
  'src/App.tsx',
  'src/guide/methodologies/index.ts',
  'public/favicon.svg',
]

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    throw new Error(`Missing required app file: ${file}`)
  }
}

const html = readFileSync(join(root, 'index.html'), 'utf8')

if (!html.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the React root mount element')
}

if (!html.includes('/src/main.tsx')) {
  throw new Error('index.html is missing the React entry script')
}

console.log('Smoke check passed')
