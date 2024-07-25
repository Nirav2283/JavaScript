const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url == '/') {
        fs.readFile('./lab8(ii).html', (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data)
            res.end();
        })
    }
    else if (url == '/contact') {
        fs.readFile("D:\\2ND SEM\\WD Programme\\form2.html", (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data)
            res.end();
        })
    } 
    
    else if (url == '/pages') {
        fs.readFile('D:\\2ND SEM\\WD Programme\\form1.html', (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data)
            res.end();
        })
    }
    else if (url == '/service') {
        fs.readFile('D:\\2ND SEM\\WD Programme\\lab8(III).html', (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data)
            res.end();
        })
    }
    else if (url == '/about') {
        fs.readFile('D:\\2ND SEM\\WD Programme\\lab13.html', (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data)
            res.end();
        })
    }
    else if (url == '/home') {
        fs.readFile('D:\\2ND SEM\\WD Programme\\lab14(i).html', (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data)
            res.end();
        })
    }
    else {
        res.end("<h1>404! Not Found</h1>")
    }

}
)






server.listen(port = 8070, () => {
    console.log(`Running now at ${port} `);
})