//Primitive 
//7 types : String,Number,Boolen,null,undefined,Symbol,BigInt

//Reference type or Non Primitive
// 3 types : Array,Objects,Function

const id=Symbol('123')
const id2=Symbol('123')  // Both symbols are different even though we are passing same value bcz it retuns obj
console.log(typeof id);

console.log(id===id2);

let BgInt =12345678908876545n

console.log(BgInt);

const heros=["a",1,"b"]
console.log(heros);
let myObj={
    name:"abc",
    age:12,
}

console.log(myObj);

const myFunc= function(){
    console.log("Hi");
}()

//==========================Memory===========================

//Stack Memory (primitive)         Heap Memory (non primitive)

