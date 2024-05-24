function sayMyName() {
    console.log("Devesh");
}

// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2) {
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(1,5)

// console.log("Result: ",result);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return 0
    }
    return `${username} just logged in`
    
}

// console.log(loginUserMessage("Devesh"));

function calculateCartPrice(val1,val2,...num1){
   return num1
}

// console.log(calculateCartPrice(200,500,400,543,655));

const user = {
    name:"Devesh",
    prices:20000
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
    
}

// handleObject(user)

// handleObject({
//     name: "sam",
//     price: 9999
// })

const myNewArray = [200,300,400,500]

function returnSecondeValue(getArray){
    return getArray[1]
}

// console.log(returnSecondeValue(myNewArray));

console.log(returnSecondeValue([200,400,600]));