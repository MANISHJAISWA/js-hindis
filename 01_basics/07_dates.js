// Dates

const myDate = new Date()
// console.log(myDate);                 //2024-04-25T13:25:09.076Z
// console.log(myDate.toString());       //Thu Apr 25 2024 13:25:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  //Thu Apr 25 2024
// console.log(myDate.toJSON());                 //2024-04-25T13:25:09.076Z
// console.log(myDate.toLocaleDateString());          //4/25/2024
// console.log(myDate.toLocaleString());          //4/25/2024, 1:25:09 PM
// console.log(myDate.toLocaleTimeString());         //1:25:09 PM


// console.log(typeof myDate);

// const myNewDate = new Date(2024, 3, 25);
// console.log(myNewDate.toDateString());

const myCreatedDate = new Date(2024,3,25,7,7)
// console.log(myCreatedDate.toLocaleString());

// const myCreatDate = new Date("2023-03-25")
// console.log(myCreatDate.toLocaleString())  //mm/dd/yy


const myCreateDate = new Date("03-25-2024")
// console.log(myCreateDate.toLocaleString())  //mm/dd/yy


// timeStamps

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));    // seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getTime());

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'Coordinated'

})
