var seconds=0;
var minutes=0;
var timer;

var start = function (minutes) {
  stop();
  seconds = 0;
  timer = setInterval(function(){ 
    var time = displayTime(minutes,seconds);
    document.getElementById("time").innerHTML=time;
    if((minutes===0)&&(seconds===0)) {
      stop();
      new Audio('alarm.wav').play();
    }
    if(seconds===0) {
      minutes--;
      seconds=60;
    }
    seconds--;
  }, 1000);
}
var stop = function() {
clearInterval(timer);
}
var displayTime = function(minutes, seconds) {
if(minutes<10) {
  minutes='0'+minutes;
}
if(seconds<10) {
  seconds='0'+seconds;
}
return minutes+" "+seconds;
} 
