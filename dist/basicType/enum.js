"use strict";
// let small = 1;
// let medium = 2;
// let large = 3;
// enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);
// enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Large;
// console.log(mySize);
var myfavoritedrink;
(function (myfavoritedrink) {
    myfavoritedrink[myfavoritedrink["water"] = 0] = "water";
    myfavoritedrink[myfavoritedrink["milk"] = 1] = "milk";
})(myfavoritedrink || (myfavoritedrink = {}));
;
console.log(myfavoritedrink.milk);
var Day;
(function (Day) {
    Day[Day["monday"] = 0] = "monday";
    Day[Day["tusday"] = 1] = "tusday";
    Day[Day["wensday"] = 2] = "wensday";
    Day[Day["thursday"] = 3] = "thursday";
    Day[Day["friday"] = 4] = "friday";
})(Day || (Day = {}));
;
console.log(Day.friday);
var typeimge;
(function (typeimge) {
    typeimge[typeimge["jpg"] = 0] = "jpg";
    typeimge[typeimge["png"] = 1] = "png";
})(typeimge || (typeimge = {}));
;
console.log(typeimge.png);
