"use strict";
// let small = 1;
// let medium = 2;
// let large = 3;
// enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Large;
console.log(mySize);
