// ARRAYS

const myArray = [0, 1, 2, 3, 4, 5, true, "Usama"] //it could be mix types of element 
// console.log(myArray) // [ 0, 1, 2, 3, 4, 5, true, 'Usama' ]

const myArr = [0, 1, 2, 3, 4, 5, 6,]
const myCourses = ["Biolog", "Chemistry", "Physics"]
// console.log(myCourses) // const myCourses = [Biolog, Chemistry, Physics] 
// console.log(myCourses) // error bcz of string 
// console.log (myArr[0]) // result = 0 // zerobsaic index present 
// console.log (myArr[1]) // result = 1
// console.log (myArr[2]) // result = 2

const anotherMethodArray = new Array (1, 2, 3, 4, 5, 6,)
// console.log (anotherMethodArray) // result = [ 1, 2, 3, 4, 5, 6 ]
// anotherMethodArray.push(7)
// console.log()
[0, 1, 2, 3,4, 5, 6, 7 ]
// Array Methods
 myArr.push(7) 
//  console.log(myArr) // [0, 1, 2, 3,4, 5, 6, 7 ] // add elements at the ends
 myArr.pop()
// console.log(myArr) //[0, 1, 2, 3,4, 5, 6,  ]// Elimanate element at the end
myArr.unshift(-1)
// console.log(myArr) // [-1, 0, 1, 2, 3,4, 5, 6,  ] //  add element fron start 
myArr.shift() // [-1, 0, 1, 2, 3,4, 5, 6,  ] 
// console.log(myArr) // [ 0, 1, 2, 3, 4, 5, 6 ] // Elimante element from start 
myArr.slice((1, 3))
console.log (myArr) // [ 0, 4, 5, 6 ] // Eliminate 