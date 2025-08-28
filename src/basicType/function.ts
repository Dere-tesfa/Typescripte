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
