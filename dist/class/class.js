"use strict";
class Account {
    // constructer method
    constructor(id, owner, balance) {
        //assign 
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    //this is another method
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid");
        }
    }
}
