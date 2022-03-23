
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function goCountDown() {

// The final date
const fest = new Date (2022, 3, 24);
// The system date
const current = new Date();
// Time remaining
const sec = (fest - current) / 1000;

const d = Math.floor(sec / 3600 / 24);
const hrs = Math.floor(sec / 3600) % 24;
const min = Math.floor(sec / 60) % 60;
const s = Math.floor (sec) % 60;

days.innerText = d;
hours.innerText = hrs;
minutes.innerText = min;
seconds.innerText = s;

}
goCountDown();

setInterval(goCountDown, 1000);