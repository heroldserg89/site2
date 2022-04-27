import { Offcanvas } from 'bootstrap';

const dropdownElements = document.querySelectorAll('.dropdown');

dropdownElements.forEach((el) => {
  const dropdownBtn = el.querySelector('.dropdown__btn');
  const dropdownContent = el.querySelector('.dropdown__content');
  dropdownBtn.addEventListener('click', (evt) => {
    const dropdownOpen = document.querySelector('.dropdown--open');
    if (!el.classList.contains('dropdown--open')) {
      if (dropdownOpen) {
        dropdownOpen.classList.remove('dropdown--open');
        dropdownOpen.querySelector('.dropdown__content').style.maxHeight = '0px';
      }
      el.classList.add('dropdown--open');
      dropdownContent.style.maxHeight = `${dropdownContent.scrollHeight + 16}px`;
    } else {
      el.classList.remove('dropdown--open');
      dropdownContent.style.maxHeight = '0px';
    };
  });
});
