// JavaScript is a Dynamically Typed Language
// In JavaScript, you don’t declare variable types explicitly (like int, string, etc.).
//The type is decided automatically at runtime, based on the value assigned.

let data = 5; 
data = "Hello";
data = true;
// console.log (data)
//In JavaScript, you don’t declare variable types explicitly (like int, string, etc.).
// The type is decided automatically at runtime, based on the value assigned.

// ************ Static Typing (for comparison):
// Languages like Java, C++, or TypeScript (a superset of JS) are statically typed.
// You must declare the type before using the variable.
//int num = 5;      // only integers allowed
// //num = "hello";    // ❌ error — cannot assign a string to an int
//  let score = 100 // Number type data 
//  let scoreValue = " Win"; // String type
//  let isLoggedIn = true; // Boolean Type
//  let outsideTemp = null // Null type date * null is also a object 
//  let userEmail; // Undefined data type

// const id = Symbol('123')
// const anotherId = Symbol ('123')
// console.log( id, anotherId) // result = Symbol(123) Symbol(123)
// console.log ( id === anotherId ) // but use strict give false bcz both are not equal bcz of symbol data type
const bigNumber = 3837189283738328n // BigInt

// *******************  Refference type (Non-Primitive Data Type)

// Array , Objct , Function 

const heros = ["science ", " Maths", "English"];
// console.log (heros)
// console.log (typeof heros) // Object ;

const myObject = {
    name :"Usama",
    age : 27,
    city : "Karachi", 
    country : "Pakistan"  
};
//console.log(myObject) 

const myFunction = function() {
   // console.log("Function");
    
}
//console.log(typeof myFunction) // return funtion but called Object 
// function  

// myFunction() //  ** with function call no console print so function call must

// ************* *************************************************************
// Stack (primitive), Heap (Non-Primitive)

// Stack memeory also use copy to change original copy must be keep as pure,
// Heap Memory also use the oirginal so change will be in original 

// ********** Example of Stack 
 let classCourse = "Maths"
 
 let anotherCourse = classCourse

//  console.log ( classCourse) // result Maths
//  console.log ( anotherCourse) // result Maths

 anotherCourse = "Science" 

//  console.log ( classCourse) // Maths
//  console.log ( anotherCourse) // Science
 
 // *************** Heap Memory ( Non-Primitive type)
let userOne = {
    name : "usama",
    age : 27
};
//console.log (userOne) // name = usama, age = 27 original copy
let userTwo = userOne; // user to get original reference
userOne.name = "Iqbal" // now change value 
userOne.age = 19
//console.log (userOne) // name = Iqbal, age = 19
// Then userOne change theri data bcz heap memeory give access to the origianl refernce
//console.log (userTwo) // name = Iqbal, age = 19
 
 
 
