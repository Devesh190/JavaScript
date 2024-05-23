// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Devesh",
    "full name": "Devesh Choudhary",
    [mySym]:"myKey1",
    age: 23,
    location: "Noida",
    email: "devesh@credex.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full nmae"]);
// console.log(JsUser[mySym]);

JsUser.email = "devesh@google.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "devesh@credex.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello User, ${this["full name"]}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());