const seeTime = () => {
    const now = new Date();
    const utcTime = now.toUTCString().slice(-12, -4);
    const day = now.toLocaleString('en-US', { weekday: 'long'});

    document.getElementById('utc-time').textContent = utcTime;
    document.getElementById('current-day').textContent = day;
}

setInterval(seeTime, 1000);

seeTime();