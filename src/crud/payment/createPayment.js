export default async function createPayment(i, a) {
    const response = await fetch('/payment/c', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({i: i, a: a}),
    })
    const data = await response.json();
    const payment = data.payment
    return payment
};
