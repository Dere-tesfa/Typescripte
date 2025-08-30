class Accounts {
    //instance 
    id: number;
    owner: String;
    balance: number;
    // constructer method
    constructor(id: number, owner: string, balance: number) {
        //assign 
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    //this is another method
    deposit(amount: number) {
        if (amount <= 0) {
            throw new Error("Invalid")
        }
    }

}
//creating objects
const accounts = new Accounts(1, "dereje", 100);
const Balances = accounts.balance;
const Owner = accounts.owner;
const Id = accounts.id;
console.log(Id, Owner, Balances);

