let startBtn = document.querySelector(".btn-success");
let stopBtn = document.querySelector(".btn-danger");
let h1 = document.querySelector("h1");
let counter = 0;
let intervalNumber = null;
startBtn.addEventListener("click", () => {
  if (intervalNumber == null) {
    intervalNumber = setInterval(() => {
      // let date = new Date();
      // h1.innerHTML = date.toLocaleTimeString();
      ++counter;

      h1.innerHTML = counter;
    }, 1000); // ms 1000ms === s
  }
  startBtn.innerHTML = "Resume";
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalNumber);
  intervalNumber = null;
  startBtn.disabled = false;
});
