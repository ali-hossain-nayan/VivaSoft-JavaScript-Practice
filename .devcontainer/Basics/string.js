let name = 'ali'
let age = 23
console.log(`My name is ${name} and I ame ${age} old`);//best way to use string


//another way to declare string and in this way we can access the all prototypes method of the string..here string works like object
const str = new String('alinayan')
console.log(str[2])
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.charAt(3))
console.log(str.indexOf('n'))
const newString = str.substring(0,4)
console.log(newString);
 const newString2 = str.slice(-8,4)//we can use negative index but substring not using it
console.log(newString2);


