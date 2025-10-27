// ======= Menú hamburguesa =======
const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.menu-principal');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
