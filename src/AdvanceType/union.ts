function kg(weight: number | string) {
    if (typeof weight === 'number')
        return weight * 1.6;
}
// kg(23);
//
console.log(kg(23));

console.log(kg('23kg'));



