const http = require('http');
const PORT = 3001;
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>I am server</h1>')
    }
    if (req.url === "/students") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            name: "John Doe",
            age: 20,
            major: "Computer Science"
        }))
    }

})
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});