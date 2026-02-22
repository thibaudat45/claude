const btn = document.getElementById('btn');
const message = document.getElementById('message');

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
