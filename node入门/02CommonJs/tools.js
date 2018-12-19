/**
 * 我们可以把公共的功能 抽离成一个单独的js文件 作为一个模块
 * 默认情况下面这个模块里面的方法或者属性,外面是无法访问的.
 * 如果要让外部可以访问模块里面的方法或者属性,就必须在模块里面
 * 通过exports或者module.exports暴露属性或者方法
 */
const tools={
    add:function(x,y){
        return x+y;
    },
    sayHello:function(){
        return "您好 NodeJS";
    }
}
module.exports=tools;
//exports.tools=tools;