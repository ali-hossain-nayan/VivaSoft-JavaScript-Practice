//primative(stack) original value not changed in stack style(LIPO)

let name1 = 'asik'
let name2 = name1
name2= 'nayan'
console.log(name1);//asik
console.log(name2);//nayan

// and non primitive(heap)reference original value changed means replace

let obj ={
    name:'ali',
    age:22,

}
let obj2 = obj
obj2.name='mamun'
console.log(obj)
console.log(obj2)