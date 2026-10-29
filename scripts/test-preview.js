import http from 'http';
import { spawn } from 'child_process';

const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], { shell: true });

setTimeout(() => {
  http.get('http://localhost:4173/', (res) => {
    console.log('Homepage (/) status code:', res.statusCode);
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      console.log('Homepage HTML length:', data.length, 'Contains root div:', data.includes('id="root"'));
      
      http.get('http://localhost:4173/school-erp', (res2) => {
        console.log('/school-erp status code:', res2.statusCode);
        
        http.get('http://localhost:4173/school-erp.html', (res3) => {
          console.log('/school-erp.html status code:', res3.statusCode);
          preview.kill();
          process.exit(0);
        });
      });
    });
  }).on('error', (err) => {
    console.error('HTTP Error:', err.message);
    preview.kill();
    process.exit(1);
  });
}, 2500);
