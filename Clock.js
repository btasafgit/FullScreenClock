

function timeUpdate() {
    var fullDate = new Date();
    var date = document.getElementsByClassName("date");
    var time = document.getElementsByClassName("time");
    var newDate = fullDate.toLocaleDateString();
    var newTime = fullDate.toLocaleTimeString();

    date[0].textContent = newDate;
    time[0].textContent = newTime;
}