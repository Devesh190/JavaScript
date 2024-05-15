const name = "Devesh"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('GTA-5-2022')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("5"));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString)

const newStringOne = " devesh  "

console.log(newStringOne.trim());

const url = "https://devesh.com//devesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('devesh'));

console.log(gameName.split("-"));