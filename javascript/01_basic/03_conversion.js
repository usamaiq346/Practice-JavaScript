let score = "usama"

//console.log (typeof score) // String
//console.log (typeof (score)) // String

// const converNumber= Number  (score)
// console.log (typeof converNumber) // Number

// console.log ( converNumber) // bt Primitive data type does not allow to change in original so result will be NaN
 
// let marks = 78 

// const converBoolean= Boolean  (marks)
// console.log (typeof converBoolean) // Convert into Boolean 

// console.log ( converBoolean) //Result will be true


// let isLoggedIn = true

// const converNumber= Number  (isLoggedIn)
// console.log (typeof converNumber) // Convert Boolean into  { Number }

// console.log ( converNumber) //Result will be  { 1 }

// let isLoggedOutNumber = false

// const converNumberOut= Number  (isLoggedOutNumber)
// console.log (typeof converNumberOut) // Convert Boolean into  { Number }

// console.log ( converNumberOut) //Result will be  { 0 }



// let isLoggedIn = true

// const converString= String  (isLoggedIn)
// console.log (typeof converString) // Convert Boolean Into String

// console.log ( converString) //Result will be true

// let isLoggedOutString = false

// const converStringOut= String  (isLoggedOutString)
// console.log (typeof converStringOut) // Convert Boolean Into String

// console.log ( converStringOut) //Result will be false


// Conversion of Null and undefined is not possible 
        

// ****************************** Operation ***************************************
// console.log ("1" + 2) // 12
// console.log (1 + "2") //12
// console.log ("1" + "2") //12
// console.log ("1" + 2) //12
// console.log ("1" + 2 + 3) //123
// console.log (1 + 2 + "3") //33
// console.log (1 + "2" +  3) //123
// console.log (1 + "2" +  3 + "4") //1234 


// ********************************* Assignment ************************************************

// let gameCounter = 1

// gameCounter++
// //console.log (gameCounter) result 2 


// let gameCounter = 1

// ++gameCounter
// console.log (gameCounter) //result 2 
// not change in both cases 

// ********* post Increment x++
 //Post-increment (x++) → first use the current value, then increase
//let x = 3;
// console.log (x) //result 3
// const y = x++
// console.log(y) //result 3
// //console.log(x) //result 4
// When you write const y = x++;, JavaScript first assigns the current value of x (which is 3) to y.
//Then, after that assignment, it increments x by 1, changing x from 3 to 4.

// ******* Pre increment ++x 

// *************** Post Increment x++
// Post-increment (x++) → first use the current value, then increase. 

// let x = 3;
// const y = ++x;
// console.log (`x:${x} , y:${y}`) // x=4 , y = 3




// *********** pre Incremnet ++x 
// Pre-increment (++x) → first increase the value, then use it.

// let x = 3;
// const y = ++x;
// console.log (`x:${x} , y:${y}`) // x= 4 , y=4

// Execution of const y = ++x;: ++x increases x from 3 to 4, and the expression evaluates to 4, so y is assigned 4. (const is fine because y is assigned once here.)

// ******************* Post Increment x++
 //Post-increment (x++) → first use the current value, then increase
// let x = 3;
// const y = x++;
// console.log (`x:${x} , y:${y}`) // x= 4 , y=3 
// When you write const y = x++;, JavaScript first assigns the current value of x (which is 3) to y.
//Then, after that assignment, it increments x by 1, changing x from 3 to 4.

