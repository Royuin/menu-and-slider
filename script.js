const drop = document.querySelector('.drop-down-a');
const dropDownMenu = document.querySelector('.drop-down-menu');

drop.addEventListener('click', () => {
  dropDownMenu.classList.toggle('hidden');
  dropDownMenu.classList.toggle('show');
});
