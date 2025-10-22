let score = 100
let newScore = new Number (100)
// console.log(score) // 100 
// console.log(newScore) // result will be in number=[Number: 100] 
// // properties

// console.log(typeof score.toString()) // String 100
// console.log(typeof newScore.toString()) // String 100

// console.log(score.toString().length) // 3
// console.log(score.toString().length) // 3
// console.log(score.toFixed(2)) // 100.00
// console.log(score.toFixed(3)) // 100.000

const decimalNum = 23.4232
// console.log (decimalNum.toPrecision(3)) // 23.4
// console.log (decimalNum.toPrecision(4)) // 23.42
// console.log (decimalNum.toPrecision(5)) // 23.423

const largeNum = 1223.33
//console.log (largeNum.toPrecision(3)) // 1.22e+3
//console.log (typeof largeNum.toPrecision(3)) // 1.22e+3 also give reult in String

const hundreds = 100000
// console.log (hundreds.toLocaleString("en-EN")) // 1,000,000
// console.log (hundreds.toLocaleString("en-PK")) // 1,000,000
// console.log (hundreds.toLocaleString("en-IN")) // 1,00,000

const numbMax = new Number (hundreds)
// console.log(numbMax)

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.6)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.1)); // 4
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,5,5,8,4,2,)); // 2
// console.log(Math.max(4,5,5,8,4,2,)); // 8

// console.log (Math.random()) // No. always in b/w 0 to 1 
// console.log (Math.random() * 10 + 1) // No. will be on b/w 1 to 10 bt ythis method is not really good so we can wrapped.
// console.log ((Math.random() * 10 ) + 1) // this method is prefered mostky for better for syntex

// no. b/w 10 tp 20
const min = 10 
const max = 20
// console.log (Math.random(max-min)) // 0.11650322443293981
// console.log (Math.random(max-min)+1) // 1.1160340686288293
// console.log (Math.random()*max-min)+1 // -0.992466589862854
// console.log(Math.floor(Math.random()*max-min)+1) // 3 
// console.log(Math.floor(Math.floor(Math.random()*max-min)+1)) // 6 
// console.log(Math.floor(Math.floor(Math.random()*max-min)+1) + min) // now all values will be in b/w  10 to 20 

const minNum = 1 
const maxNum = 6 
// console.log(Math.floor(Math.random()*(maxNum - minNum) +1) + minNum)
console.log (Math.floor(Math.random()*(maxNum - minNum )+ 1) +minNum)
