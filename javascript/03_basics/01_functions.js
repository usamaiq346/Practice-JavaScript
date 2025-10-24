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
console.log(loginUserMessage()) // please Enter your Name First
console.log(loginUserMessage()) // Login User just login right Now // if assign default value in parameter so is will print atleast default value  
// console.log(loginUserMessage("Usama")) // Usama just login right Now
