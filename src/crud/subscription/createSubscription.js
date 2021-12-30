export default async function createSubscription(i) {
    const response = await fetch('/subscription/c', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({i: i}),
    })
    const data = await response.json();
    const subscription = data.subscription
    return subscription
};