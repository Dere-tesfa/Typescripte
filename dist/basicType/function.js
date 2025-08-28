"use strict";
// function tax(income: number) {
//     if (income < 3000) {
//         return income * 1.2;
//         return income * 1.5
//     }
// }
// console.log(tax(100));
//The type argument value is number
function sum(x, y) {
    return x + y;
}
let sums = sum(23, 43);
console.log(sums);
//the type of argument is String
function user(name) {
    return `hello user ${name}!!`;
}
let users = "Derje";
console.log(users);
// lastName parameter of this function is optional:
function buildname(Fname, lname) {
}
let showname = buildname("derje");
console.log(`I am ${showname}`);
//Functions with Union Types
function whatTime(hour, minute) {
    return hour + ':' + minute;
}
let time = whatTime(2, 30);
let times = whatTime('1', 30);
let showTimes = whatTime(2, '40');
let showTime = whatTime('3', '32');
console.log(time);
console.log(showTime);
console.log(showTimes);
console.log(times);
