const http = require('http');
const url = require('url');
/**
 * req 获取url信息
 * res 浏览器返回响应信息
 */
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
   // console.log(req.url);//打印浏览器输入的url
    if (req.url != '/favicon.ico') {
        const result = url.parse(req.url, true);//第一个参数是地址  第二个参数是true,把get传值转换成对象
        console.log(result.query.page);
    }
    res.write("您好nodeJs");
    res.write("我是nodeJS程序");
    res.end();//结束响应
}).listen(8001);
