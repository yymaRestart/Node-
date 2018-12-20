const fs = require('fs');
//fs.Stats 对象提供了文件的属性
//检测是文件还是目录


// fs.stat("html", (err, stats) => {
//     if (err) {//表示这个文件不存在
//         console.log(err);
//     } else {
//         // console.log("是文件吗?"+stats.isFile());
//         // console.log("是目录吗?"+stats.isDirectory());
//         console.log(`文件${stats.isFile()}`);//模板字符串
//         console.log(`目录${stats.isDirectory()}`);
//     }
// })


//创建目录 fs.mkdir(path[, options], callback)
// fs.mkdir("css", (err) => {//创建目录,前提是当前目录不存在
//     if (err) {
//         console.log("创建目录失败!");
//         return false;
//     }
//     console.log("创建目录成功!");
// })

// fs.mkdir('css/index/a/b/c', { recursive: false }, (err) => {
//     if (err) throw err;
// });


//写入文件 fs.writeFile(file, data[, options], callback)
// fs.writeFile("info1.txt","您好???",(err)=>{
//     console.log(err);
//     if(err){
//         throw err;
//         return false;
//     }
//     console.log("文件写入成功!");
// });
//追加文件 如果文件不存在 则会创建文件
// fs.appendFile("info2.txt","哈哈哈\n",(err)=>{
//     if(err){
//         throw err;
//         return false;
//     }
//     console.log("追加文件成功!");
// })

//读取文件 fs.readFile(path[, options], callback) 如果文件不存在不会新建
//如果没有指定 encoding，则返回原始的 buffer。
// fs.readFile("info2.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
//读取目录
// fs.readdir("./css/index/a",(err,data)=>{
//  console.log(data);
// })
//重命名 fs.rename(oldPath, newPath, callback) 包括文件和文件夹
// fs.rename("info1.txt","info4.txt",(err)=>{
//     if(err) throw err;
//     console.log("已完成重命名");
// })
//剪贴
// fs.rename("html/css/basic.css","html/css/style.css",(err)=>{
//     if(err) throw err;
//     console.log("已完成重命名");
// })
//删除目录  fs.rmdir(path, callback) 只能删除文件夹
// fs.rmdir("css",(err)=>{
//     if(err) throw err;
//     console.log("目录删除成功!");
// })
//删除文件  fs.unlink(path, callback)
fs.unlink("index.html",(err)=>{
    if(err) throw err;
    console.log("文件删除成功!");
})
