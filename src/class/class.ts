class Account {
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