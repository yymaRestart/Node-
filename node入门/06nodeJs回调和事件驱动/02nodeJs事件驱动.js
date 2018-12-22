// const event = require('events');
// console.log(event);
// var eventEmitter = new event.EventEmitter();

// eventEmitter.on("event",function(a,b){
//     console.log(a,b,this);
// EventEmitter {
//     domain: null,
//         _events: { event: [Function] },
//     _eventsCount: 1,
//         _maxListeners: undefined
// }
//     console.log(this===eventEmitter);
// })

// eventEmitter.on("event", (a, b) => {
//     console.log(a, b, this);//这里的this 是{}
//     console.log(this === eventEmitter);
// })
// eventEmitter.emit("event", "a", "b");//触发事件
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.once('event', () => {
    console.log(++m);
});
myEmitter.emit('event');
// 打印: 1
 myEmitter.emit('event');
// 不触发