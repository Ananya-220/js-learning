let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let milliseconds = document.getElementById('milliseconds');

let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');

let lapList = document.getElementById('lapList');

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer;
let running = false;
let lapNumber = 1;

function stopwatch() {
    ms++;
    if (ms == 100) {
        ms = 0;
        sec++;
    }

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hr++;
    }

    updateDisplay();
}

function updateDisplay() {
    hours.textContent = padTime(hr);
    minutes.textContent = padTime(min);
    seconds.textContent = padTime(sec);
    milliseconds.textContent = padTime(ms);
}

function padTime(time, targetLength = 2) {
  return time.toString().padStart(targetLength, '0');
}

startBtn.addEventListener('click' , () => {
    if (running)
    {
        return;
    }
    running = true;
    timer = setInterval(stopwatch , 10);
});

pauseBtn.addEventListener('click' , () => {
    clearInterval(timer);
    running = false;
});

resetBtn.addEventListener('click' , () => {
    clearInterval(timer);
    running = false;
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    lapNumber = 1;
    lapList.innerHTML = "" ;
    updateDisplay();
});

lapBtn.addEventListener('click' , () => {
    if (!running) 
    {
        return; 
    }
    let li = document.createElement('li');
    li.innerHTML = `
    <span>Lap ${lapNumber}</span>
    <span> ${padTime(hr)} : ${padTime(min)} :${padTime(sec)} : ${padTime(ms)} </span>
    `;
    lapList.prepend(li);
    lapNumber++;
});




