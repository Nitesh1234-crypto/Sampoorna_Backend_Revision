// //commonjs ==> require
// //esmodule ==> import and export
// module.exports.add=function(a,b){
//     return a+b;
// }
// module.exports.sub= function(a,b){
//     return a-b;
// }
// //object={
//  // add:add,
//  // sub:sub
// //}
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


export function add(a,b){
    return a+b;
}
 function sub(a,b){
    return a-b;
}
export default sub;