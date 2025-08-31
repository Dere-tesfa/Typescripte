class User {

    constructor(public name: string, private _id: number) {
        this.name = name;
        //this.id=id
    }
    //geter
    get userid(): number {
        return this._id;
    }
    //seter
    set userid(value: number) {
        this.userid = this._id
    }

}
const uservalue = new User('dere', 2);
const userename = uservalue.name;
const usereID = uservalue.userid;
console.log(usereID);
