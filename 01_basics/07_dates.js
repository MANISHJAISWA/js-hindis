// Dates

const myDate = new Date()
// console.log(myDate);                 //2024-04-25T13:25:09.076Z
// console.log(myDate.toString());       //Thu Apr 25 2024 13:25:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Thu Apr 25 2024
// console.log(myDate.toJSON());                 //2024-04-25T13:25:09.076Z
// console.log(myDate.toLocaleDateString());          //4/25/2024
// console.log(myDate.toLocaleString());          //4/25/2024, 1:25:09 PM
// console.log(myDate.toLocaleTimeString());         //1:25:09 PM


console.log(typeof myDate);

// const myNewDate = new Date(2024, 3, 25);
// console.log(myNewDate.toDateString());

const myCreatedDate = new Date(2024,3,25,7,7)
// console.log(myCreatedDate.toLocaleString());

// const myCreatDate = new Date("2023-03-25")
// console.log(myCreatDate.toLocaleString())  //mm/dd/yy


// const myCreatDate = new Date("03-25-2024")
// console.log(myCreatDate.toLocaleString())  //mm/dd/yy


// timeStamps

let myTimeStamp = 