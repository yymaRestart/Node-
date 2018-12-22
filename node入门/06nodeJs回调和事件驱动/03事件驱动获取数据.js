const fs=require('fs');
const event=require('events');
const eventEmitter=new event.EventEmitter();
eventEmitter.on("readFile",(data)=>{
    console.log("hahah"+data);
})
function getMine(){
    fs.readFile('mine.json',"utf-8",(err,data)=>{
        eventEmitter.emit("readFile",data);
    })
}
getMine();
