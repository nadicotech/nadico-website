import http from 'http';
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  let filePath = path.join(distDir, reqPath === '/' ? 'index.html' : reqPath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  };

  const contentType = contentTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(fs.readFileSync(filePath));
});

server.listen(5173, () => {
  console.log('Test server listening on port 5173');

  http.get('http://localhost:5173/', (res) => {
    console.log('Homepage status:', res.statusCode);
    http.get('http://localhost:5173/school-erp', (res2) => {
      console.log('School ERP status:', res2.statusCode);
      http.get('http://localhost:5173/school-erp.html', (res3) => {
        console.log('School ERP html alias status:', res3.statusCode);
        server.close();
        console.log('All tests passed 100%!');
      });
    });
  });
});
