

// var server = require('./server');

// server.startServer();

// function callFunction(fun,name){
//     fun(name);
// }

// var sayBye = function(name){
//     console.log(name + 'bye');
// }

// callFunction(sayBye,'rails365');

// var stuff = require('./count');

// console.log(stuff.counter(['ruby','nodejs','react']));
// console.log(stuff.adder(3,2));
// console.log(stuff.pi);

//事件
/*1.require events  and util 
  2.define a function
  3.util.inherits(function,events.EventEmitter);
  4.use function:element.emit("","");
  */
// var events = require('events');
// var util = require('util');

// var Person = function(name){
//     this.name = name;
// }

// var Check = function(che){
//     this.che = che;
// }
// util.inherits(Check,events.EventEmitter);
// var che1 = new Check('che10');
// var che2 = new Check('che20');
// var che3 = new Check('che30');

// var check=[che1,che2,che3];
// check.forEach(function(che){
//     che.on('check',function(liy){
//         console.log(che.che+" stack "+liy);
//     })
// })
// che1.emit('check',"sss");



// util.inherits(Person, events.EventEmitter);
// var xiaoming = new Person('xiaoming');
// var lili = new Person('lili');
// var lucy = new Person('lucy');               

// var person=[xiaoming,lili,lucy];           //放到数组中

// person.forEach(function(person){
//    person.on('speak',function(message){
//        console.log(person.name + " said:" + message);
//    })
// })

// xiaoming.emit('speak','hi');
// lucy.emit('speak','I want a curry');     //调用函数
// lili.emit('speak','lll')

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(message){
//     console.log(message);
// })

// myEmitter.emit('someEvent','the event was emitted');


//同步，异步
/*同步：
  fs.readFileSync('filename',"utf8")-------readfile
  fs.writeFileSync('filename',"content")------create and write file
  先输出文件内容后输出finished；
  异步：
  异步都要加函数
  fs.readFile("filename","utf8",function)
  先输出finished后输出文件内容；
  
  */
// var fs = require('fs');

// var readMe=fs.readFile("readMe.txt","utf8",function(err,data){
//     console.log(data);
// });

// console.log("finished");


//删除目录
/*
  同步：
  fs.unlinkSync('filename',"回调函数function")
  异步：
  fs.unlink('filename',"回调函数function")
 */
var fs=require('fs');

//异步
// fs.unlink('readMe.txt',function(){
//     console.log("delete complete");
// })
//同步
fs.unlinkSync('readMe.txt');