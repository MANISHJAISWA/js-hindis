// primitive  - call by value

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const isLoggedIn = true;
const num = 67.23
const outsidetemp = null;

let userName;
const id = Symbol('123');

const anotherId = Symbol('123');
// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId);

const bigNumber = 7834727382923234342334n
// console.log(bigNumber)


// Non premitive/ refernce type : Array, Objects, functions

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "Manish",
    age: 23,
    class: "AL-ML",
    div: 'A'
}

function printhello(){
    // console.log("Hello");
}
printhello()


// arrow function
let myfunction = ()=>{
    console.log("Hello world");
}
myfunction()



// console.log(typeof num);
// console.log(typeof heros);
// console.log(typeof outsidetemp);
console.log(typeof myfunction);


//   *******************************MEMORY****************************************

//stack(primitive)
//heap(Non primitive )

let myYoutubeName = "manish.com"
let anotherName = myYoutubeName
anotherName = "chai aur code"
console.log(myYoutubeName)
console.log(anotherName)


let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "manish@google.com"

console.log(userOne.email)
console.log(userTwo.email)