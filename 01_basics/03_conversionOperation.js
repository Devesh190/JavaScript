let score = "33"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(valueInNumber);
//console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1, false =>0

/*
when you convert a number like "33abc" or undefined using Number()
function it convert but when you try to print number 
it show NaN(Not a Number) and its type show "number"

or you convert null it give 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Devesh" => true
// null,undefined,NaN => false

let someNumber = true

let stringNumber = String(someNumber)
console.log(stringNumber);