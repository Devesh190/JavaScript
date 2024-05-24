const user = {
    username: "Devesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     username = "Devesh"
//     console.log(this.username);
// }

// chai()

// Arrow function
// const chai = () => {
//     let username = "Devesh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

const addTwo = (num1,num2) =>(num1 + num2)

console.log(addTwo(3,4));