let timerId;
let count = 0;
let stations = ["University", "Manhattan", "Dragomanova", "Teatralna", "Arsenalna"];
let h1 = document.getElementsByTagName('h1')[0],

    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

//Clock
function update() {
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[2].innerHTML = seconds;
}

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

clockStart();


function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00")
      + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
      + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();

function station() {

    let station = document.getElementById("station");

     station.innerHTML = stations[count];
     if(count > 3){
         count=-1;
     }
     count++;
}
//Detector
clear.onmouseenter = function() {
    h1.textContent = "00:00:00";
    clearTimeout(t);
};
clear.onmouseleave = function() {
    station();
    timer();
    seconds = 0;
    minutes = 0;
    hours = 0;
};
//Alerts
let Alerts = function (msg, minutes, seconds) {
    this.msg = msg;
    this.minutes = minutes;
    this.seconds = seconds;
    let alerts = document.getElementById("alerts");
    alerts.innerHTML = "<p>" + this.msg + ": " + this.minutes + " minutes " + this.seconds + " seconds</p>";

    clear.onmouseover = function () {
        alerts.innerHTML = "";
    };

};

