
var seconds = 0;
var minutes = 0;
var hours = 0;
var timer;

function startStopwatch() {
    clearInterval(timer);

  timer = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    displayStopwatch();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayStopwatch();
}

function displayStopwatch() {
  var stopwatch = document.getElementById("stopwatchDisplay");
  stopwatch.innerHTML = "<h3>" + (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + "</h3>";
}