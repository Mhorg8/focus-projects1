// ///////////////////////////////////
// timer\
const timerEl = document.querySelector('.timer');
const startBtn = document.getElementById('start-timer');
const pauseBtn = document.getElementById('pause');
const shortBreak = document.getElementById('shortBreak');
const resetBtn = document.getElementById('reset-btn');
const time = document.getElementById('time');
let set;
let count = 59;
let paused = true;
let minCount = 24;
time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
    value = value < 10 ? `0${value}` : value
    return value
}
pauseBtn.addEventListener('click', (
    pauseTimer = () => {
        paused = true;
        clearInterval(set);
    }
))
resetBtn.addEventListener('click', (
    resetTime = () => {
        pauseTimer();
        count = 59;
        minCount = 24;
        time.textContent = `${minCount + 1}:00`;
    }
))
shortBreak.addEventListener('click', () => {
    pauseTimer();
    count = 59;
    minCount = 4;
    time.textContent = `0${minCount + 1}:00`
})

startBtn.addEventListener('click', () => {
    pauseTimer();
    if (paused) {
        time.textContent = `${appendZero(minCount)} : ${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            time.textContent = `${appendZero(minCount)} : ${count}`;
            if (count == 0) {
                if (minCount != 0) {
                    minCount--;
                    count = 60;
                } else {
                    clearInterval(set)
                }
            }
        }, 1000)
    };
})
