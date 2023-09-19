// https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


//date format different way with different methods
// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let mycreateDate = new Date(2023,0,25)
// console.log(mycreateDate.toDateString());


// let mycreateDate = new Date(2023,0,25,6,7)
// console.log(mycreateDate.toLocaleString());

// let mycreateDate = new Date('2023-01-25')
// console.log(mycreateDate.toLocaleString());

// let mycreateDate = new Date('01-14-2023')
// console.log(mycreateDate.toLocaleString());

// //Date always come into milisecond after divide 1000 we get in second
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));
let myTime = new Date()
// console.log(myTime.getMonth()+1);
// console.log(myTime.getDay());

// console.log(`${myTime.getHours()} and ${myTime.getMinutes()}`);

// myTime.toLocaleString('default',{
//     weekday: 'long',
   
// })
// console.log(myTime.toLocaleString());