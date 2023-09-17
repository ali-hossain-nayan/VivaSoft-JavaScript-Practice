//Primitive always call by value
//7 types string,number,boolean,null is not 0 .its empty ,undefined,symbol,BigInt
let num=6
let name = "Nayan"
let isLogged = false;
let id = Symbol('34')

//symbol always return a id .and two id are not same
let anotherid = Symbol('567')
console.log(id===anotherid)


//Non primitive(Reference)
//array,object,function

let array = ['batman','spiderman','superman']
let myobj={
    name:'nayan',
    age:23,
}
//normal function
const a = function (){
    console.log("Hello world") 
}
// myfun()
//arrow function
const myfunc = ()=>{
    return "hello world"
}
myfunc()
console.log(myfunc())
console.log(typeof myfunc())

let x = null
console.log(typeof x)
console.log(typeof a)