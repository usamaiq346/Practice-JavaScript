const marvelHeroes = [ "IronMan", "SpiderMan", "AntMan"]
const dcHeroes = [" SuperMan", "Batman","AquaMan"]
// console.log(marvelHeroes)
// console.log(dcHeroes)

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[3][0])  // SuperMan 3 index which is another array then pick o index element
//console.log (marvelHeroes) //['IronMan','SpiderMan','AntMan', [ ' SuperMan', 'Batman', 'AquaMan' ] ]
// // push add both arrays but 2nd array add as songle elemnt 

// const concatAllHeroes = marvelHeroes.concat(dcHeroes)
// console.log(concatAllHeroes) // [ 'IronMan', 'SpiderMan', 'AntMan', ' SuperMan', 'Batman', 'AquaMan' ]
// concat add both add arrays and this time the add all arrays from 2nd arrays as single elemnets
// one more thing concat need another variable to store values

const spreadAllHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(spreadAllHeroes) // 

// const nestedArray = [1,2,3,[5,6,7,],6,4,6,[8,9,0]]
// const flatNestedArray = nestedArray.flat() // flat(infinity) both working as same
// console.log(flatNestedArray) // [ 1, 2, 3, 5, 6,7, 6, 4, 6, 8,9, 0] // flat perform nested array into singlr    

// conversion of all data type into array 
console.log(Array.isArray("Array")) // False bcz its string 
console.log(Array.from("Array")) // [ 'A', 'r', 'r', 'a', 'y' ] // convert string into arrray 
// .from working on single varaible
console.log(Array.from({name: "Array"})) // [] give empty array bcz of it can't distinguish what to be return 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ] // its can convert multilple variiable return into single array 

