const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;
btnStop.setAttribute('disabled', '');
// color changing function
function colorChangefct() {
  const colorChange = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
// color generating function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
});
btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', '');

  clearInterval(timerId);
});
