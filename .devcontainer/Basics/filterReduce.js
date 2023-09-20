const mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = mynums.filter((num)=>num>4)//filter callback function take and one condition apply
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk)=>bk.genre==='Science')//using () dont need to return single line
//   console.log(userBooks);

  const userBooks1 = books.filter((bk)=>{ return bk.publish>=2000})//if we use {} that means we start scope and we have to return value.
//   console.log(userBooks1);

const userBooks2 = books.filter((bk)=>{ 
    return bk.publish>=1995 && bk.genre==='History'
})
// console.log(userBooks2);


//chaining nested method
const newnums = mynums
        .map((num)=> num*10)
        .map((num)=>num+1)
        .filter((num)=>num>40)
// console.log(newnums);



//Reduce
const nums = [1,2,3]
const sum1 = nums.reduce((acc,curval)=> acc+curval,0)//with one line smartly


const sum = nums.reduce((acc,curval)=>{
    console.log(`acc: ${acc} curval: ${curval}`);
    return acc+curval
   
},0)//initial value 0 and this initial goes for acc and curval is 1

console.log(sum);
console.log(sum1);