// Singleton Object f
// const darazUser = new Object () 
// console.log (darazUser) // {} itiwill give empty space & its method to create object calles Singleton Object  

const darazUser = {}
// console.log (darazUser) // {} itiwill give empty space & its method to create object calles Singleton Object

darazUser.id = "123abc"
darazUser.name = "Usama"
darazUser.isLoggedIn = false
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

const  users = [
    {
        id : 1,
        email : "1@gmail.com"
    },
    {
        id : 2 ,
        email : "2@gmail.com"
    },
    {
        id : 3,
        email : "3@gmail.com" 
    },
    {
        id : 4,
        email : "4@gmail.com" 
    },
    {
        id : 5,
        email : "5@gmail.com" 
    },
]
// console.log(users[1].email) // 2@gmail.com // Array of object it will use [] and target the object which required 

// console.log(darazUser) 

// console.log (Object.keys(darazUser)) // [ 'id', 'name', 'isLoggedIn' ] // it will data in array form by using keys
// console.log (Object.values(darazUser)) // [ '123abc', 'Usama', false ] // it will data in array form by using values
// console.log (Object.entries(darazUser)) // [ [ 'id', '123abc' ], [ 'name', 'Usama' ], [ 'isLoggedIn', false ] ] // here it give data by using both keys and value 

// console.log(darazUser.hasOwnProperty("isLoggedIn")) // True // checking the that objects hava that type of value or not 
// console.log(darazUser.hasOwnProperty ("isLogged"))  // False

// Destructuring  

const course = {
    courseName : "Science",
    tutionFees : 2000,
    courseTeacher : "Sir Science"
};
// console.log (course.courseTeacher) // This method is good bt some cases we used in multiple places so this method so makes code lenghty and difficult to read 
// So we use another methd called destructuring where value will store in variables then we can call where we want 

// const {courseTeacher: courseTeacher} =  course //target value 
// console.log (courseTeacher) // Sir Science

// const {courseTeacher : teacher} = course 
// console.log (teacher) // Sir Science 
// Both method are acceptable 

 // JSON type Data 
 // In JSON {} both key and Value are written in String 
 {
    "name" : "Usama ",
    "id" : 123,
    "location " : "Github"
 }

 