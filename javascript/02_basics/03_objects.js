// Singleton Object 
// created by object.created 

// Literal Object 
const mySym = Symbol('Key1') // Symbol should be Define otherwise it will not return any value & give error
const myObject = {
    name : "Usama",
    "full name" : "Usama Iqbal",
    age : 23,
    email : "usama@CEO.com",
    [mySym] : "Symbol mention",
    location : "Pakistan",

};
// console.log(myObject)
// console.log (myObject.name) // to access object by key 
// console.log (myObject.email) // to access object by key
// console.log (myObject["full name"]) // If key was  string so we use [] to access the the object value
myObject.email = "iqbal@yahoo.com"
// console.log (myObject) // Now its change in objects by key 
// Object.freeze(myObject)
myObject.email = "qureshi@yahoo.com" // it will not  change bcz objesct is  freezed
// console.log (myObject) // Email should be "iqbal@yahoo.com" 

myObject.greeting = function () {
    console.log ("Hello My Object")
};
// console.log (myObject.greeting) // First print it give error bcz myObject was freezed 
console.log (myObject.greeting) // [Function (anonymous)] // it will give bcz of here only define not execute the function 
console.log (myObject.greeting()) // Hello My Object 

myObject.greeting = function () {
    console.log(`Hello Mr ${this.name} welcome to the devolper world`) // " this " operator usse to access current object key value 
};
console.log (myObject.greeting()) // Hello Mr Usama welcome to the devolper world
