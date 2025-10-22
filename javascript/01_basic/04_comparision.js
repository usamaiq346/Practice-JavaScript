//  console.log( 2 > 1 ) // T
//  console.log( 2 < 1 ) // F
//  console.log( 2 >= 1) // T
//  console.log( 2 <= 1 ) //F
//  console.log( 2 == 2) // T
//  console.log(2 === 2) // T
//  console.log(2 != 2) // F 
// console.log ( null == undefined) // T { a/c to ECMA Spec. rule null is always equal to zero }
// console.log ( null === undefined) // F because bith are diff data type
// console.log ( null > undefined) // F {null gives 0 while undefined convert into NaN so it can't be compared}
// console.log ( null < undefined) // F {null gives 0 while undefined convert into NaN so it can't be compared}
// console.log ( null <= undefined) //F {null gives 0 while undefined convert into NaN so it can't be compared}
// console.log ( null >= undefined) // F {null gives 0 while undefined convert into NaN so it can't be compared}
// console.log ( null >= undefined) // F null gives 0 while undefined convert into NaN so it can't be compared


// console.log ( null > 0 ) // F
// console.log ( null < 0 ) //F
// console.log ( null == 0 ) // F
// console.log ( null === 0 ) // F
// console.log ( null != 0 ) // T {  *(  null is not equal to anything else (like 0, false, or "") * )}
// console.log ( null >= 0 ) // T { * because >= converts null to 0 before comparing * }
// console.log ( null <= 0 ) // T { ( * null is converted to 0, and 0 <= 0 evaluates to true.* ) }

// Strict Check === first check data types and compare if data type will not same then it will not goes Further 

console.log ( "2" === 2 ) // F
console.log ( 2 === 2 ) // T 
console.log ( 2 === "2" ) // F 