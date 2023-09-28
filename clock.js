const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

setInterval(function() {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hrs = date.getHours();
  
  const gap = 360 / 60;
  
  second.style.transform = `rotate(${(sec / 60) * 360 - 90 }deg)`;
  
  minute.style.transform = `rotate(${(min / 60) * 360 + ((sec/60)*6) - 90 }deg)`;
  
  hour.style.transform = `rotate(${(hrs / 12 ) * 360 + ((min/60)*30)  - 90 }deg)`;
  
}, 1000)