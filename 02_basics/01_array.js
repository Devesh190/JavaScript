// array

const myArr = [10,1,2,3,4,5]
const arr = new Array(1,2,3,4,5)
const hero = ["batman","superman","hanuman"]

// console.log(arr[1]);

// Array methods

myArr.push(6)
// console.log(myArr);

myArr.pop()

// console.log(myArr);

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(10));

const newArr = myArr.join()

// console.log(typeof newArr);

// console.log(newArr);

// slice, splice
// slice do not manipulate original array but
// splice manipulate original array


// console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

// console.log(myn1);

// console.log("b ",myArr);

const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("c ",myArr);

const marvel_heros = ["thor","ironman","spiderman"]
const dc_hero = ["superman","batman","flash"]

// marvel_heros.push(dc_hero)

// console.log(marvel_heros);

// const allHeros =  marvel_heros.concat(dc_hero)

// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_hero]

// console.log(all_new_heros);

const another_array = [1,2,4,[2,32,2,3],4,[3,1,[2,3,4]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Devesh"));
console.log(Array.from("Devesh"));
console.log(Array.from({name:"Devesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));