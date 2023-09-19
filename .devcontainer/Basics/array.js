let arr = [0,1,2,3,4,5,6]

// console.log(arr.includes(8));
// console.log(arr.includes(5));
// console.log(arr.indexOf(6));
// let newarr = arr.join()//convert array to string
// console.log(arr);
// console.log(newarr);
// console.log(typeof newarr);

console.log('A',arr);
let mynew1 = arr.slice(1,3);
console.log(mynew1);
console.log('A',arr);

// splice manipulate the original array means distract splice element from original array and also include limit element
console.log('B',arr);
let mynew2 = arr.splice(1,3);
console.log(mynew2);
console.log('C',arr);

//spread means concatenate
let arr2 = ['hello','hi','hum']
console.log(...arr,...arr2);

//nested array in one array format
let arr3 = [2,3,4,[5,6],[8,9,[1,2]]]
console.log(arr3.flat(Infinity));

//check and convert array 
console.log(Array.isArray('nayan'));
console.log(Array.from('nayan'));

console.log(Array.from({name: 'nayan'}));//interesting case you have to said wheater key or value convert
