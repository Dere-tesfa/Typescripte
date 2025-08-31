"use strict";
class Account_s {
    //instance 
    // id: number;
    // owner: String;
    // private balance1: number;
    // constructer method
    constructor(id, owner, balance1) {
        this.id = id;
        this.owner = owner;
        this.balance1 = balance1;
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
const account_s = new Account_s(1, "dereje", 100);
const Balance_s = account_s.getBalance();
console.log(Balance_1);
