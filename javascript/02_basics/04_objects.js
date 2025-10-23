// Singleton Object f
// const darazUser = new Object () 
// console.log (darazUser) // {} itiwill give empty space & its method to create object calles Singleton Object  

// const darazUser = {}
// console.log (darazUser) // {} itiwill give empty space & its method to create object calles Singleton Object

// darazUser.id = "123abc"
// darazUser.name = "Usama"
// darazUser.isLoggedIn = false
// console.log (darazUser) // { id: '123abc', name: 'Usama', isLoggedIn: false } its give the object and its key value pair

// Nested Object   
// const darazUser = {
//     email: "usama@daraz.com",
//     fullName :{
//         userFullName :{
//             firstName : "Usama",
//             lastName : "Iqbal"
//     },
//     },
// }
// console.log (darazUser.fullName.userFullName.firstName) // Usama 
// console.log (darazUser.fullName.userFullName.lastName) // Iqbal

// const darazUser = {
//     email: "usama@daraz.com",
//     userFullName :{
//             firstName : "Usama",
//             lastName : "Iqbal"
//     },
// }
//  console.log (darazUser.fullName?.userFullName.lastName) // undefined // it will not give error bcz of optional chaining opererator but give undfined value 

// Joing two  objects

const obj1 = {
    1 : "a", 2 : "b"
};
const obj2 = {
    3 : "c", 4 : "d"
};
const obj3 = {
    5 : "f", 6 : "g"
};
// const resultObject = (obj1, obj2, obj3)
// console.log (resultObject) // { '5': 'f', '6': 'g' } // in JavaScript, the comma operator doesn’t combine objects it just evaluates all expressions and returns only the last one.

// const resultObject = Object.assign({},obj1, obj2, obj3) // probaly used empty objects bcz we only want to store  the in target objects
// console.log (resultObject) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'f', '6': 'g' } // it wiil combine all object but this  not  be prefered way to combine objects 


// const resultObject = {...obj1, ...obj2, ...obj3}
// console.log (resultObject) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'f', '6': 'g' } // spread opperstor mmerge all objects 


// const resultObject = {...obj1, ...obj1, ...obj3}
// console.log (resultObject) // { '1': 'a', '2': 'b', '5': 'f', '6': 'g' } // if any key was same so it will take the last object key value