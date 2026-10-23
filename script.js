const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const icon = menuToggle.querySelector('i');
  if (icon) icon.setAttribute('data-lucide', navLinks.classList.contains('open') ? 'x' : 'menu');
  if (window.lucide) window.lucide.createIcons();
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
document.getElementById('year').textContent = new Date().getFullYear();
if (window.lucide) window.lucide.createIcons();
