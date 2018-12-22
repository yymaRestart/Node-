const fs=require('fs');
function getMine(callback){
    fs.readFile('mine.json',"utf-8",(error,data)=>{
        callback(data);
    })
}
getMine(function(result){
    console.log(result);
});