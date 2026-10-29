import fs from 'node:fs';
import path from 'node:path';

const distIndex = path.resolve('dist/index.html');
const distSchool = path.resolve('dist/school-erp.html');

if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, distSchool);
  console.log('Postbuild: Successfully copied dist/index.html to dist/school-erp.html');
}
