const btn = document.getElementById('btn');
const message = document.getElementById('message');

const responses = [
  'Oui, ça va super ! 🚀',
  'Au top merci ! 😎',
  'Impeccable ! 🌟',
  'Jamais mieux ! 💪',
  'Trop bien, merci ! 🎉',
];

let index = 0;

btn.addEventListener('click', () => {
  message.textContent = responses[index % responses.length];
  // Re-trigger animation
  message.style.animation = 'none';
  message.offsetHeight;
  message.style.animation = '';
  index++;
});
