import fs from 'node:fs';
import path from 'node:path';

const distIndex = path.resolve('dist/index.html');
const routes = [
  'school-erp.html',
  'hospital-hms.html',
  'inventory-pos.html',
  'web-development.html',
  'digital-marketing.html',
  'about.html',
  'contact.html'
];

if (fs.existsSync(distIndex)) {
  for (const route of routes) {
    fs.copyFileSync(distIndex, path.resolve('dist', route));
  }
  console.log('Postbuild: Successfully copied dist/index.html to all route static HTML files.');
}
