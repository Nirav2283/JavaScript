const http = require('http');

const server = http.createServer((req , res)=>{
    res.end("<b>Hello World</b>")
})

server.listen(5001 , ()=>{
    console.log("Server is running now");
})
