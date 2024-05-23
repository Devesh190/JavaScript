const tinderUser = new Object()
// const tinderUser = {}
tinderUser.id = "123fd"
tinderUser.name = 'sam'
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullName:{
        userFullName: {
            firstName: "Devesh",
            lastName: "Choudhary"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {...obj1,...obj2}

// const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3);

const users = [
    {
        id:1,
        name:"Devesh"
    },
    {
        id:2,
        name:"shrusti"
    },    
    {
        id:3,
        name:"Rohit"
    }
]

users[0].name

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
