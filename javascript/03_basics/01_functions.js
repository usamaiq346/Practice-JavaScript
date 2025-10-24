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

function addTwoNumbers (number1, number2){
    let result = number1 + number2
    return  result
    console.log ("Not print after function return the value")// bt before return it can print 
}
const result = addTwoNumbers(3, 4)
console.log ("Result ",result) // Result  7