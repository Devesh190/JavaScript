// Primitive data type
// call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const temp = null

const email = undefined;

const bigNumber = 975893287973994937449579n

// Reference (Non primitive)

// Array, Object, Functions

// JavaScript is a dynamically typed

const heros = ["IronMan","Batman","Hanuman"]

const myObj = {
    name:"Devesh",
    age:23
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof email);

// if we see type of any null value it give us object

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-primintive)

let name = "Devesh"

let friendName = name

friendName = "Rohit"

console.log(name);
console.log(friendName);

let userOne = {
    email:"Devesh@email.com",
    upi:"ehifh@jiekhjf"
}

let userTwo = userOne

userTwo.email = "Devesh@credex.com"

console.log(userOne.email);
console.log(userTwo.email);