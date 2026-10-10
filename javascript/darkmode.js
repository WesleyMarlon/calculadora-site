const btnTheme = document.getElementById('btn-theme');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const currentTheme = savedTheme || (systemDark? 'dark' : 'light');

html.setAttribute('data-theme', currentTheme);
btnTheme.textContent = currentTheme === 'dark'? '☀️' : '🌙';

btnTheme.addEventListener('click', () => {
  const active = html.getAttribute('data-theme');
  const next = active === 'dark'? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  btnTheme.textContent = next === 'dark'? '☀️' : '🌙';
});