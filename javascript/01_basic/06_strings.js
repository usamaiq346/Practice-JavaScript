const playerName = "iory  "
let livesRemain = 3

//console.log ( playerName + livesRemain ); // this methkd is outdated so we use new which called 
// backticks ( ` ` ) method is called string intipulation 
 //console.log ( `${playerName} has ${livesRemain} lives to complete their game` ) 

 // ************ another method to declare string 
 const gameName = new String ('pakistan')
//***************  methods of Strings

 //console.log ( gameName.length) // Length = 4 
// console.log ( gameName.__proto__); // result {} , // this method can be used with it we can easily get prototype characters
// console.log (gameName.toLowerCase ()); // pubg
// console.log(gameName.charAt(1)) // Result " U" 
// console.log(gameName.charAt(1).toLowerCase()) // Result " u "
// console.log(gameName.indexOf()) // Result " -1 "
// console.log(gameName.indexOf("B")) // Result " 2 "
// console.log(gameName.indexOf("b")) // Result "-1 "
// console.log(gameName.toLowerCase().indexOf("b")) // Result " 2 "
// console.log (gameName.substring (0, 5)) // Result pakis
// const newString = gameName.substring(0, 4) 
// console.log(newString) // Result paki

// const anotherString = gameName.slice(0, 6)
const anotherStringNeg = gameName.slice(-7, 4)// 8-7= 1 so the slice will be(1, 4) resul is aki istead of pakistan
//console.log (anotherString)// Result pakist 0 - 5 and 6 not include in slice 
//console.log (anotherStringNeg)// Result pakist 0 - 5 and 6 not include in slice '
// Example 4: slice(-5, 6)

//-5 → 8 - 5 = 3, so  ==> slice   will be (3, 6)

//  const spliceString = gameName.splicesString
//  console.log (spliceString)

const stringTrim = "    pakistan    " 
// console.log (stringTrim) // result = {"    pakistan    " } print without space 
// console.log (stringTrim.trim()) // result { "pakistan"} remove all spaces

const replaceString = "https://pakistan%20sindh%30karachi" 
// console.log(replaceString.replace('%20', '-')) // result = https://pakistan-sindh%30karachi
// console.log(replaceString.replace('%20','%30',  '-')) 
// https://pakistan%30sindh%30karachi both replace with 2nd value it menas that only two argumnets apply
// console.log ( replaceString.includes("karachi")) //True
// console.log ( replaceString.includes("karachi", "pakistan")) // result = true
// console.log ( replaceString.includes("KARACHI", "PAKISTAN")) // result = false
// // case sensitive 
// console.log ( replaceString.includes("lahore", "karachi", "PAKISTAN" )) // result = false 
// // only starting value will be prefered to give result in boolean 

const splitString = "PAKISTAN"
const resultString =splitString.split("")
// console.log(resultString) // [ 'P', 'A'. K', 'I', 'S', 'T', 'A', 'N']
// console.log(resultString)

// const arrayStringSplit = ["PAKISTAN"]
// console.log(arrayStringSplit.split(""))

const arrayStringSplit = "PAKISTAN";
console.log(arrayStringSplit.split(""));

const arrayStringSplitArr = ["PAKISTAN"];
console.log(arrayStringSplitArr.filter())
