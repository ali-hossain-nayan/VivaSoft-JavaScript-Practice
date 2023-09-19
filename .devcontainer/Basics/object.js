

// let mysym = Symbol('key2')

// let obj ={
//     name: 'nayan',
//     [mysym]:'key2',
//     age: 34,
//     'fullname': 'ali nayan',
//     isLogged:false,
//     lstlogg:['sunday','monday']

// }
// console.log(obj.name);
// console.log(obj['name']);
// // console.log(obj,fullname);//not correct thats why always use square brace because key value always accepted as string
// console.log(obj['fullname']);
// console.log(obj[mysym]);
// console.log(typeof mysym);
// Object.freeze(age)
// obj.age='24'

// obj.gretting=function(){
//     console.log('hello JS user');
// }
// console.log(obj.gretting());

// obj.grettingTwo = function(){
//     console.log(`hello JS user ${this.name}`);
// }
// console.log(obj.grettingTwo());
// console.log(obj);



//singleton object
// const objj = new Object()


// not singleton
const objjj = {
    email:'some@gamil.com',
    fullname:{
        username:{
            fname:'nayan',
            lname:'ali'
        }
    }
}
// console.log(objjj.fullname.username.fname);


//merge obj
obj1 = {1:'a',2:'b'}
obj2 = {3:'a',4:'b'}
//  const obj3 =  Object.assign({},obj1,obj2)
obj3 ={ ...obj1,...obj2}
// console.log(obj3);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(obj1.hasOwnProperty('1'));
console.log(obj1.hasOwnProperty('islogged'));

