export default async function updateSubscription(i, p) {
    const response = await fetch('/subscription/u', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({i: i, p: p}),
    })
    const data = await response.json();
    const subscription = data.subscription
    return subscription
};