export default async function readSubscription(i) {
    const response = await fetch('/subscription/r', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({i: i}),
    })
    const data = await response.json();
    const subscription = data.subscription
    return subscription
};