const fs = require('fs');
//流的方式读取文件
const readStream = fs.createReadStream('input.txt');
var str = "";
var count=0;
//正在读取的操作
readStream.on("data", function (chunk) {
    str += chunk;
    count++;
})
//读取完成
readStream.on("end", function (chunk) {
    console.log(str);
    console.log(count);
})
// //读取失败
readStream.on("error", function (error) {
    console.log(error);
})
// var num=0;
// function readFile(callback){
//     readStream.on("data",function(chunk){
//         str+=chunk;
//         num++;
//         callback(str);
//     })
// }
// readFile(function(data){
//     console.log("外面的str"+data); 
//     console.log(num);
// });
