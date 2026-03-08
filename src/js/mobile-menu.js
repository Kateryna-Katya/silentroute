import burgerIcon from '../img/header/burger.png';
import closeIcon from '../img/header/home.png';

document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.querySelector('.menu-button');
  const iconImg = menuBtn.querySelector('img');
  const modalMenu = document.querySelector('.modal');
  const menuItem = document.querySelectorAll('.menu-list-item');
  const header = document.querySelector('.header');

  let isMenuOpen = false;

  // начальная иконка
  iconImg.src = burgerIcon;

  menuBtn.addEventListener('click', () => {

    isMenuOpen = !isMenuOpen;

    iconImg.src = isMenuOpen ? closeIcon : burgerIcon;

    if (isMenuOpen) {
      openModal();
    } else {
      closeModal();
    }

  });

  menuItem.forEach(item =>
    item.addEventListener('click', () => {
      closeModal();
      iconImg.src = burgerIcon;
      isMenuOpen = false;
    })
  );

  window.addEventListener('scroll', blurHeader);

  function openModal() {
    modalMenu.style.display = 'block';
  }

  function closeModal() {
    modalMenu.style.display = 'none';
  }

  function blurHeader() {
    if (!header) return;

    if (window.scrollY > 60) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  }

});