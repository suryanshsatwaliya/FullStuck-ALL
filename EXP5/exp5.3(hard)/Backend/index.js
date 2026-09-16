const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
}

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "../FrontEnd/dist", req.url === '/' ? 'index.html' : req.url);
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            const ext = path.extname(filePath);
            res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
            res.end(data);
        }
    })
})
server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
})