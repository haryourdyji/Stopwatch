// Store the minuter in a variable
const mainTime = 1;

// convert the minutes to sec and store in a variable
let time = mainTime * 60;

// Getting the html id and storing it into a variable

const countdownEl = document.querySelector(".timer");

// A countdown function that runs every sec and update the counter
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  // updating the seconds
  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  if (time <= -1) {
    clearInterval(mainTime);
    return;
  }
}
// calling the function
setInterval(updateCountdown, 1000);
