export default async function deleteSubscription(i) {
    await fetch('/subscription/d', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({i: i}),
    })
};