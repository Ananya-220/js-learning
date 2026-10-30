let display = document.getElementById("display");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

let totalSeconds = 0;
let timer;

function updateDisplay() {

    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    display.textContent = padTime(hrs) + ":" + padTime(mins) + ":" + padTime(secs);
}

function padTime(time, targetLength = 2) {
  return time.toString().padStart(targetLength, '0');
}

startBtn.addEventListener("click", () => {

    if (timer) 
    {
        return;
    } 

    if (totalSeconds === 0) {

        let h = parseInt(hours.value) || 0;
        let m = parseInt(minutes.value) || 0;
        let s = parseInt(seconds.value) || 0;

        totalSeconds = h * 3600 + m * 60 + s;

        if (totalSeconds <= 0) {
            alert("Please enter a valid time.");
            return;
        }

        updateDisplay();
    }

    timer = setInterval(() => {

        if (totalSeconds > 0) {

            totalSeconds--;
            updateDisplay();

        } else {

            clearInterval(timer);
            timer = null;

            alert("Time's Up!");
        }

    }, 1000);

});

pauseBtn.addEventListener("click", () => {

    clearInterval(timer);
    timer = null;

});

resetBtn.addEventListener("click", () => {

    clearInterval(timer);
    timer = null;

    totalSeconds = 0;

    hours.value = "";
    minutes.value = "";
    seconds.value = "";

    updateDisplay();

});

updateDisplay();