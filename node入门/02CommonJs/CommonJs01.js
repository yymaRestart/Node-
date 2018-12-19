const config=require('./config');
const http=require('http');
console.log(config.str);
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html:charset=utf-8"});
    res.write("CommonJs模块了解一下");
    res.end();
}).listen(8001)