const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
    console.log('context of startTimer is', this);
    // input: func, number
    // output: number

    this.intervalId = setInterval(() => {
      console.log('context is', this);
      console.log(timer.getTime());
      this.secondsPassed += 1;

      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

console.log(timer);
timer.startTimer();
timer.stopTimer();
timer.resetTimer();

// lose context case # 1
// const func = timer.startTimer;
// func();

// function setInterval(() => {
//   window.callback;
// }, interval);

// example callback + context
// console.log(
//   [1, 5, 10, 19].filter(function (el) {
//     console.log(this);
//     return el > 5;
//   }, timer),
// );
