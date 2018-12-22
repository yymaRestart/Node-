function getMineFromJson(fs, extname) {
    // fs.readFile('./mine.json',"utf-8",(err,data)=>{
    //     if(err){
    //         throw err;
    //     }else{
    //         var mineObject=JSON.parse(data);
    //         console.log(mineObject[extname]);
    //         return mineObject[extname] || "text/html"
    //     }
    // })
    //将异步读取数据变成同步读取数据
    let data = fs.readFileSync('./mine.json', 'utf-8');
    var mineObject = JSON.parse(data);
    return mineObject[extname] || "text/html"
}
module.exports = getMineFromJson
