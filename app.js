const btn = document.getElementById('btn');
const message = document.getElementById('message');
const clock = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${h}:${m}:${s}`;
}
updateClock();
setInterval(updateClock, 1000);

const messages = [
  'Bonjour ! 👋',
  'Hello! 🌍',
  'Hola! 🌎',
  'Ciao! 🌏',
  'こんにちは! ✨',
];

let index = 0;

btn.addEventListener('click', () => {
  message.textContent = messages[index % messages.length];
  index++;
});
