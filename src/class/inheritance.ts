class Person {
    constructor(public fName: string, public lName: string) { }
    get fullName() {
        return this.fName + "" + this.lName;
    }
    walk() {
        console.log("walking...");

    }

}
class Student extends Person {
    constructor(public studId: string, fName: string, lName: string) {
        super(fName, lName);
    }
    talke() {
        console.log("taking...");

    }

}
class Teacher extends Person {

}
const person = new Person("dere", "tesfa");
person.fName

console.log(person.fName);
