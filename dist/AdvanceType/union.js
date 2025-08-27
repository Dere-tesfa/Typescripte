"use strict";
function kg(weight) {
    if (typeof weight === 'number')
        return weight * 1.6;
}
// kg(23);
//
console.log(kg(23));
console.log(kg('23kg'));
