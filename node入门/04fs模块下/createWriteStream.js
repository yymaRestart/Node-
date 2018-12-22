const fs = require('fs');
var data = "我是从数据库读取的lallalalal,我要保存起来oooooo000000000000000000\n";
//写入数据到文件的指定位置
var writeStream = fs.createWriteStream('output.txt', {
    flags: 'r+',
    encoding: 'utf8',
    autoClose: true,
    mode: 0666,
});
for (var i = 0; i <5; i++) {
    writeStream.write(data);
}
writeStream.end();//标记写入完成
//会触发下面的事件
writeStream.on("finish", function () {
    console.log("写入完成");
})
writeStream.on("error", function () {
    console.log("写入失败");
})