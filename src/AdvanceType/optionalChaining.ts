type customer = {
    birthday: Data
};
function getCustomer(id: number): customer | null {
    return id === 0 ? null : { birthday: new Date() }
} 