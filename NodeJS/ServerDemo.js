const http = require('http');

const server = http.createServer((req , res)=>{
    res.end('<b>Hello world</b>');
})

server.listen(5000 , ()=>{
    console.log("Server is running now");
})