//copy array or object element;
let arr=[1,2,3,4,5];
console.log(...arr);
let obj={
    a:10,
    b:20
}
let newobj = {...obj};
console.log(newobj);


let newarr = [...arr];
console.log("new",newarr);
obj={...obj,a:30}; //partial update
console.log(obj); //{a:10,b:20,a:30} ==>{a:30,b:20}

let obj2={a:10,b:20,c:30};
let change={a:50,b:60}
obj2={...obj2,...change};
console.log(obj2);