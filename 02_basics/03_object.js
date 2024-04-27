// singleton    -- constructors
// object.create

//object literals

const mySym = Symbol("key1")


const jsUser = {
    name:"Manish",
    [mySym]: "key1",                       // symbol
    "full Name":"Manish Jaiswal",    
    age:18,
    email:"manish@email.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","wednesday","saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"])  // another method to access

// console.log(jsUser.full Name);   // show error
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser["full Name"]);

// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);


// jsUser.email = "manisharyan@gmail.com"
// console.log(jsUser);

// Object.freeze(jsUser)

// jsUser.name = "raj"           // doesnot change because of freeze
// console.log(jsUser);     

// add function in object


jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(` Hello Js User ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




















