function kg(weight: number | string) {
    if (typeof weight === 'number')
        return weight * 1.6;
}
kg(23);
kg('23kg')


