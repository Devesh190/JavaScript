const accountId = 32392
let accountEmail = "Devesh@gmail.com"
var accountPassword = "87242"
accountCity = "Delhi"//do not use this type of variable declaration 
let accountState

// accountId = 2 we can not change const variable value once to assign it

accountEmail = "Choudhary@Devesh.com"
accountPassword = "97542"
accountCity = "Alwar"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])