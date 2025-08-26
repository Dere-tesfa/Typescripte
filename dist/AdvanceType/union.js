"use strict";
function kg(weight) {
    if (typeof weight === 'number')
        return weight * 1.6;
}
kg(23);
kg('23kg');
