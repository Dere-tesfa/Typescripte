"use strict";
class User {
    constructor(name, _id) {
        this.name = name;
        this._id = _id;
        this.name = name;
        //this.id=id
    }
    get userid() {
        return this._id;
    }
    set userid(value) {
        this.userid = this._id;
    }
}
const uservalue = new User('dere', 2);
const userename = uservalue.name;
const usereID = uservalue.userid;
console.log(usereID);
