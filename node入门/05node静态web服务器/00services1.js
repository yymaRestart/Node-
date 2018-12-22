const http = require('http');//http模块
const fs = require('fs');//文件模块
const path = require('path');//path模块
const url = require('url');
const getMine = require('./model/getMine');
const getMineFromJson = require('./model/getMineFromFile');
http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    //console.log(pathName);
    if (pathName == "/") {
        pathName = "/index.html";//默认加载的首页
    }
    //获取文件的后缀名
    let extName = path.extname(pathName)//返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。
    getMineFromJson(fs, extName, function (data) {
        console.log(data);
        res.writeHead(200, { "Content-Type": "" + data + ";charset=UTF-8" });
    });;
    // 如果 path 的最后一部分没有 . 或 path 的文件名（参考 path.basename()）的第一个字符是 .，则返回空字符串。
    if (pathName != '/favicon.ico') {
        // console.log(pathName);
        fs.readFile('static/' + pathName, (err, dataSuccess) => {
            if (err) {
                fs.readFile('static/404.html', (err, dataError) => {
                    if (err) {
                        throw err;
                    } else {
                        res.write(dataError);
                        res.end();
                    }
                })
            } else {
                res.write(dataSuccess);
                res.end();
            }
        })
    }
}).listen(8001);