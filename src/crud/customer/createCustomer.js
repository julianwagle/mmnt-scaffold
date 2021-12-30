export default async function createCustomer(e) {
    const response = await fetch('/customer/c', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({e: e}),
    })
    const data = await response.json();
    const customer = data.customer
    return customer
};
