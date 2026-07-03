// //commonjs ==> require
// //esmodule ==> import and export keyword
// module.exports.add=function(a,b){
//     return a+b;
// }
// module.exports.sub= function(a,b){
//     return a-b;
// }

// // module.exports.add=add;
// // module.exports.sub=sub;
// // module.exports={
// //     add,
// //     sub
// // }

// // let obj={}

// // obj.a=10
// // obj.b=20;
// // console.log(obj);

//named export
export function add(a,b){
    return a+b;
}
 function sub(a,b){
    return a-b;
}
//default export
export default sub;