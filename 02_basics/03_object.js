// singleton    -- constructors
// object.create

//object literals
const jsUser = {
    name:"Manish",
    "full  Name":"Manish Jaiswal",
    age:18,
    email:"manish@email.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","wednesday","saturday"]
}
console.log(jsUser.email);
console.log(jsUser["email"])

// console.log(jsUser.full Name);   // show error
console.log(jsUser["fullName"]);

