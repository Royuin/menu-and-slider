const drop = document.querySelector('.drop-down-a');
const dropDownMenu = document.querySelector('.drop-down-menu');

drop.addEventListener('click', () => {
  dropDownMenu.classList.toggle('hidden');
  dropDownMenu.classList.toggle('show');
});

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  const dropDown = document.querySelector('.hamburger-drop-menu');
  dropDown.classList.toggle('hidden');
  dropDown.classList.toggle('show');
});
