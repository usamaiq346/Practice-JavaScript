// Functions 
// function are te method that toke anywhere we can use 

// console.log ("u")
// console.log ("s")
// console.log ("a")
// console.log ("m")
// console.log ("a")
//  this method is very headache its is impossible to write again & again so resolve this issueu we use functuin 
function sayMyName (){              // () = parameter    // {}= deffination of the function
    console.log ("u")
    console.log ("s")
    console.log ("a")
    console.log ("m")
    console.log ("a")
}
// sayMyName // called Reffernce // not give any console log
// sayMyName () // this  (Execution   ) called arguments when braces add called execution   

// function addTwoNumbers (number1, number2) /* In function for addition no need to use (+) b/w them*/{
// console.log (number1 + number2)
// }
// addTwoNumbers() NaN // bcz in this we not pass argumnets what to do so function assume that its not a number
// addTwoNumbers(2, 5) // 7   
// addTwoNumbers(2, "3") // 23 

// function addTwoNumbers (number1, number2){
//     let result = number1 + number2
//     return  result
//     console.log ("Not print after function return the value")// bt before return it can print 
// }
// const result = addTwoNumbers(3, 4)
// console.log ("Result ",result) // Result  7

// function loginUserMessage (userName){
//     return `${userName} just login right now` // $ {} contain space b/w them it will not work  
// }
// function loginUserMessage (userName){
//     if(userName === undefined){
//         console.log ("Please enter your name first ") // Please enter ypour name first 

//     }
//     return `${userName} just login right now` // $ {} contain space b/w them it will not work  
// }
// console.log(loginUserMessage("Usama"))
// console.log(loginUserMessage("")) //  just login right now
// console.log(loginUserMessage()) // undefined just login right now

function loginUserMessage (userName = "Login User"){
    if(!userName){
        console.log ("Please Enter Your Name First")
        return
    }
    return `${userName } just login right Now`
}
// console.log(loginUserMessage()) // please Enter your Name First
// console.log(loginUserMessage()) // Login User just login right Now // if assign default value in parameter so is will print atleast default value  
// console.log(loginUserMessage("Usama")) // Usama just login right Now

// function calculateCartPrice (num1){
//     return num1
// }
// console.log(calculateCartPrice(2)) // 2

// function calculateCartPrice (num1){
//     return num1
// }
// console.log (calculateCartPrice(10, 20, 30,40)) // 10 bcz it only take first value so to overcome this issue we use another method

// function calculateCartPrice (...num1){
//     return num1
// }
// console.log(calculateCartPrice(10, 20, 30, 40)) // [ 10, 20, 30, 40 ] by using rest operator as like spread operator it work same and convert into single array 

// function calculateCartPrice (val1, val2, ...num1){
//     return num1
// }
// console.log (calculateCartPrice(10, 20, 30, 40)) // [ 30, 40 ] in this val1 hold first value and val2 hold secomd value and remaining value store in  num1

const user = {
    name : "usama",
    price : 10
}
function userObject (anyObject){
    // console.log (`User name is ${anyObject.name} and there price was ${anyObject.price}`)
}
// userObject(user) // User name is usama and there price was 10
// console.log(userObject()) // error was missing arguments
// console.log(userObject(user)) // User name is usama and there price was 10

// we can directly insert in function arugument that can change  the the user value
userObject  ({
    name : "Iqbal",
    price : 20
}) // User name is Iqbal and there price was 20
// console.log(userObject(user))// givinn error bcz function already define

//  For Array function
// function myArray (anyArray){
//     return anyArray 
// }
// console.log(myArray([10, 20, 30, 40])) // [ 10, 20, 30, 40 ]

const getSecondArray = [100, 200, 300, 400,]
function myarray (getArray){
    return getArray[2]
}
console.log(myarray(getSecondArray)) // 300

