// Dates
let myDate = new Date 
// console.log (myDate) // 2025-10-19T10:24:44.483Z
// console.log (myDate.toString()) // Sun Oct 19 2025 15:26:16 GMT+0500 (Pakistan Standard Time)
// console.log (myDate.toLocaleString()) // 19/10/2025, 3:27:01 pm
// console.log (myDate.toDateString()) // Sun Oct 19 2025
// console.log (myDate.toISOString()) // 2025-10-19T10:29:2
// console.log (myDate.toJSON()) // 2025-10-19T10:29:02.892Z
// console.log (typeof myDate) // 2object


//let myCreatedDate = new Date (2025, 09, 27) // month start with 0 = jan
// let myCreatedDate = new Date (2025, 10, 27)
// let myCreatedDate = new Date (2025, 10, 27) 
//console.log (myCreatedDate.toString())

// let myCreatedDate = new Date (2025, 09, 27, 12, 8)
// console.log (myCreatedDate)

let yyMmDd = new Date (2025, 10, 27)
// console.log (yyMmDd)

// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // Total time from 01 Jan 1971 is  { 1760960574713 }
// console.log(yyMmDd.getTime()) // (2025, 10, 27) convert into millisecond is { 1764183600000 } 

// conversion into millisecond to second 
let myTimeStamp = Date.now()
// console.log (Date.now()) // 1760961318823 MS
// console.log ((Date.now())/1000) // 1760961318.852 S
// console.log (Math.floor(Date.now()/1000)) // 1760961318 

let newDate = new Date() // new are the object so we can excess .Year, Month, Day 
console.log (newDate.getFullYear()) // 2025
console.log (newDate.getMonth()) // months is 09 which means that months are indesxing from 0
console.log (newDate.getDay()) // 1 which means that today day is monday
console.log (newDate.getDate()) // Today date is 20 
