let minutes = 0;
let seconds = 0;
let interval;
let countdown;

function startCounter() {
    if (interval) {
        clearInterval(interval);
    }

    let countdownTime = parseInt(document.getElementById('countdownInput').value);
    if (!isNaN(countdownTime) && countdownTime > 0) {
        minutes = Math.floor(countdownTime / 60);
        seconds = countdownTime % 60;
    } else {
        minutes = 0;
        seconds = 0;
    }

    updateDisplay();

    interval = setInterval(function () {
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            document.getElementById('pauseResumeButton').disabled = true;
        } else {
            updateCounter();
        }
    }, 1000);

    document.getElementById('pauseResumeButton').disabled = false;
}

function pauseResumeCounter() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        document.getElementById('pauseResumeButton').innerText = 'Devam Et';
    } else {
        interval = setInterval(updateCounter, 1000);
        document.getElementById('pauseResumeButton').innerText = 'Duraklat';
    }
}

function setCountdownTime() {
    let newCountdown = parseInt(document.getElementById('countdownInput').value);
    if (!isNaN(newCountdown) && newCountdown > 0) {
        countdown = newCountdown;
        minutes = Math.floor(countdown / 60);
        seconds = countdown % 60;
        updateDisplay();
    }
}

function updateCounter() {
    seconds--;
    if (seconds < 0) {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            clearInterval(interval);
            document.getElementById('pauseResumeButton').disabled = true;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    document.getElementById('minutes').innerText = formattedMinutes;
    document.getElementById('seconds').innerText = formattedSeconds;
}
