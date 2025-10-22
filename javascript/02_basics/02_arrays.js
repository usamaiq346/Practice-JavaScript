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
console.log(spreadAllHeroes) // 