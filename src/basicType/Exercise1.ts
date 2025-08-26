// Exercises
// • For each of these values, what type will the TypeScript compiler infer? 
// let a = 100; 
// let b = 'Coffee'; 
// let c = [true, false, false]; 
// let d = {age: number};
// let e = [3];
// let f;
// let g = [];
let a: number = 100;
let b: string = 'coffee';
let c: boolean = true;
let d: [boolean, boolean, boolean] = [true, false, true]//tpule type
let e: { age: number } = { age: 22 }//object 
let f: number[] = [3];//array
let g;//any type
