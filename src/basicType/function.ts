// function tax(income: number) {
//     if (income < 3000) {
//         return income * 1.2;
//         return income * 1.5

//     }
// }
// console.log(tax(100));

//The type argument value is number
function sum(x: number, y: number): number {
    return x + y;
}
let sums: number = sum(23, 43);
console.log(sums);
//the type of argument is String

function user(name: string): any {
    return `hello user ${name}!!`
}
let users: string = "Derje";
console.log(users);
// lastName parameter of this function is optional:

function buildname(Fname: string, lname?: string): any {

}
let showname: string = buildname("derje")
console.log(`I am ${showname}`);

//Functions with Union Types
function whatTime(hour: number | string, minute: number | string): string {
    return hour + ':' + minute;
}
let time: string = whatTime(2, 30);
let times: string = whatTime('1', 30);
let showTimes: string = whatTime(2, '40');
let showTime: string = whatTime('3', '32')
console.log(time);
console.log(showTime);
console.log(showTimes);
console.log(times);
