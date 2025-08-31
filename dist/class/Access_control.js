"use strict";
class Account1 {
    // constructer method
    constructor(id, owner, balance1) {
        //assign 
        this.id = id;
        this.owner = owner;
        this.balance1 = balance1;
    }
    //this is another method
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid");
        }
        this.balance1 = +amount;
    }
    getBalance() {
        this.balance1 = this.balance1;
    }
}
//creating objects
const account1 = new Account1(1, "dereje", 100);
const Balance_1 = account1.getBalance();
console.log(Balance_1);
