
async function getEvents() {
    return await fetch('http://localhost:3000/events');
}

async function addEvent(event) {
    return await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    });
}