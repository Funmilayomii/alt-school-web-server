const http = require('http');
const fs = require('fs');
const path = require('path')

const HOSTNAME = 'localhost'
const PORT = 4000;

let filepath 
let content_type = "text/html"

const server = http.createServer((req, res) => {
    if(req.url === '/' ) {
        filepath = path.join(__dirname, "index.html")
        res.writeHead(200,{
            "Content-Type": content_type
        })
    } else {
        filepath = path.join(__dirname, "404.html")
        res.writeHead(404, {
            "Content-Type": content_type
        })
    }
    fs.readFile(filepath, (err, data) => {
        if (err){
            console.log(error)
            res.writeHead(500)
        } else {
            res.end(data)
        }
    })


})


server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http:/${HOSTNAME}:${PORT}/`);
})