
var date = document.getElementsByClassName("date")[0];
var time = document.getElementsByClassName("time")[0];

function updateDateTime(){
    var fullDate = new Date();
    // var newDate = fullDate.toLocaleDateString();
    // var newTime = fullDate.toLocaleTimeString();
    var d = fullDate.getDay();
    var M = fullDate.getMonth()+1;
    var y = fullDate.getFullYear();
    var h = fullDate.getHours();
    var m = fullDate.getMinutes();
    var newTime = h+":"+m;
    var newDate = d+"/"+M+"/"+y
    date.textContent = newDate;
    time.textContent = newTime;}

setInterval(updateDateTime, 1000);