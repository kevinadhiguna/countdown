const currentYear = new Date().getFullYear();

// Access and manipulate 'currentYearElement' instead of hardcoding it
const currentYearElement = document.getElementById('currentYearElement');
currentYearElement.innerText = currentYear;

// Current year gets updated dinamically without having to change it every year
const countDate = new Date(`Dec 31, ${currentYear} 23:59:59`).getTime();

function newYear() {
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(function() {
  newYear();
}, 1000);
