setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

function updateTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  var time = hours + ":" + minutes + ":" + seconds;
  var date = day + "/" + month + "/" + year; // + ", " + today.getDay();
  document.getElementById('time').innerHTML = time;
  document.getElementById('date').innerHTML = date;
  setTimeout(updateTime, 1000);
}





function enterFullscreen() {
  if (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled) {
    document.documentElement.requestFullscreen();
    document.querySelector("button").style.display = "none";
  } else {
    window.alert("Fullscreen mode is not supported by your browser.");
  }
}