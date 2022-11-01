let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
  
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let interval = null;
  
startBtn.addEventListener('click', function () {
    if(interval !== null){
        clearInterval(interval);
    }
    interval = setInterval(displayTimer,10);
});
  
stopBtn.addEventListener('click', function () {
    clearInterval(interval);
});

resetBtn.addEventListener('click', function () {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
});
  

function displayTimer(){

    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 document.getElementById('hr').innerHTML = hours < 10 ? "0" + hours : hours;
 document.getElementById('min').innerHTML = minutes < 10 ? "0" + minutes : minutes;
 document.getElementById('sec').innerHTML = seconds < 10 ? "0" + seconds : seconds;

}
