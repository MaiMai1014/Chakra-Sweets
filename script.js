const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.menu-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formNote').textContent =
    `Thanks${name ? ', ' + name : ''}! This is a demo form, so your message was not sent or stored.`;
  event.target.reset();
});
