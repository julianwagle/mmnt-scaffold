export default async function deleteCustomer(i) {
    await fetch('/customer/d', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({i: i}),
    })
};
