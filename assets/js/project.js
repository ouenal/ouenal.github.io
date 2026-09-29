document.querySelectorAll('.navbar-burger').forEach(button => {
  const menu = document.getElementById(button.getAttribute('aria-controls'));
  if (!menu) return;
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.classList.toggle('is-active', open);
    menu.classList.toggle('is-active', open);
  });
});
