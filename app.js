// Animation lettre par lettre
const text = 'avrilterrones.com';
const titleEl = document.getElementById('title');

text.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.classList.add('letter');
  span.textContent = char === '.' ? '.' : char;
  span.style.animationDelay = `${0.6 + i * 0.06}s`;
  titleEl.appendChild(span);
});

// Effet ripple au clic
document.querySelector('.fullscreen-link').addEventListener('click', (e) => {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  const size = 80;
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - size / 2) + 'px';
  ripple.style.top  = (e.clientY - size / 2) + 'px';
  document.body.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});
