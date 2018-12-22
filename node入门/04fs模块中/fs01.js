const fs = require('fs');
//判断服务器是否有upload目录
// fs.stat("upload",(err,stats)=>{
//     if(err){ //如果没有这个目录 就要创建这个目录
//         fs.mkdir("upload",(err)=>{
//             if(err) throw err;
//             console.log("目录创建成功!");
//         })
//     }else {
//         console.log(stats.isFile());
//         console.log("文件目录已经存在");
//     }
// })
//找出html文件下所有的目录 然后打印出来
var filesArr = [];
fs.readdir("html", (err, files) => {
    if (err) {
        return false;
    } else {
        //    files.map((item,index)=>{ undefined 这种写法是错误的
        //        fs.stat(item,(err,stats)=>{
        //            //console.log(item);
        //           // console.log(stats);
        //        })
        //    })


        // for (var i = 0; i < files.length; i++) {
        //     (function (j) {
        //         fs.stat('html/' + files[j], function (err, stats) {
        //             if (j == files.length) {
        //                 console.log("结束");
        //                 console.log(`遍历结束${filesArr}`);
        //                 return false;
        //             }
        //             if (stats.isDirectory()) {
        //                 filesArr.push(files[j]);
        //             }
        //         })
        //     })(i);
        // }




        // var promise = new Promise(function (resolve, reject) {
        //     for (var i = 0; i < files.length; i++) {
        //         (function (j) {
        //             fs.stat('html/' + files[j], function (err, stats) {

        //                 if (stats.isDirectory()) {
        //                     filesArr.push(files[j]);
        //                 }
        //             })
        //         })(i);
        //     }
        //     if (i == files.length) {
        //         console.log(filesArr);
        //         resolve(filesArr);
        //     } else {
        //         reject("读取目录失败!");
        //     }
        // });

        // promise.then(function (data) {
        //     console.log(`成功${data}`);
        // }, function (error) {
        //     console.log(`失败${error}`);
        // })



        //         function getFile(i){
        //             if(i==files.length){  /*循环结束*/
        //                 console.log(`目录${filesArr}`);   /*打印出所有的目录*/
        //                 return false;
        //             }
        //             fs.stat('html/'+files[i],function(error,stats){  
        //                 if(stats.isDirectory()){
        //                     filesArr.push (files[i]);
        //                 }
        //                 getFile(i+1);
        //             })
        //         }
        //         getFile(0);
        //         console.log(filesArr);//这时候打印是undefined
    }
});
//console.log(filesArr);//在外面打印还是undefined 异步了


// 异步操作取文件只有一种 方式：回调函数
function fn(callback) {
    fs.readdir('html', function (err, data) {
        if (err) {
            console.log('文件读取失败')
        } else {
            // console.log(data)
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                arr.push(data[i])
            }
            callback(arr);
        }
    })
}
fn(function(arr) {
    console.log(arr);
});
