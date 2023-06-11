const endDate = new Date("2023-07-24")
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const sec = document.getElementById("seconds");

document.addEventListener('DOMContentLoaded', () => {
    
    function countdown() {

        let countdownTimer;
        const timeLeft = endDate - new Date();

        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60);
        const secLeft = Math.floor((timeLeft / 1000) % 60);

        days.textContent = daysLeft < 10 ? '0' + daysLeft : daysLeft;
        hours.textContent = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.textContent = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        sec.textContent = secLeft < 10 ? '0' + secLeft : secLeft;
        if (timeLeft <= 0) clearInterval(countdownTimer);
    }

    countdown();
    countdownTimer = setInterval(countdown, 1000);
    
});

