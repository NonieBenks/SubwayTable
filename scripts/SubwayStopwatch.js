let h1 = document.getElementsByTagName('h1')[0],

    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;
let stations = ["University", "Manhattan", "Dragomanova"];
let count = 0;

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

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();

function station() {

    let station = document.getElementById("station");

     station.innerHTML = stations[count];
     if(count > 1){
         count=-1;
     }
     count++;
}

clear.onmouseenter = function() {
    h1.textContent = "00:00:00";
    clearTimeout(t);
}
clear.onmouseleave = function() {
    station();
    timer();
    seconds = 0; minutes = 0; hours = 0;
}