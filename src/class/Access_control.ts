class Account1 {
    //instance 
    id: number;
    owner: String;
    private balance1: number;
    // constructer method
    constructor(id: number, owner: string, balance1: number) {
        //assign 
        this.id = id;
        this.owner = owner;
        this.balance1 = balance1;
    }
    //this is another method
    deposit(amount: number) {
        if (amount <= 0) {
            throw new Error("Invalid")
        }
        this.balance1 = +amount;
    }

    getBalance() {
        this.balance1 = this.balance1
    }

}
//creating objects
const account1 = new Account1(1, "dereje", 100);
const Balance_1 = account1.getBalance();

console.log(Balance_1);


