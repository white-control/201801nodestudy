// function callFunction(fun, name) {
//     fun(name);
// }

// callFunction(function(name) {
//     console.log(name + ' Bye');
// }, 'rails365');

function timeout(ms){
   console.log(ms);
   return new Promise((resolve,reject)=>{
       setTimeout(resolve,ms,'yes');
   });
}

timeout(100).then((value)=>{
    console.log(value);
})