// Drop Down Menu

const drop = document.querySelector('.drop-down-a');
const dropDownMenu = document.querySelector('.drop-down-menu');

drop.addEventListener('click', () => {
  dropDownMenu.classList.toggle('hidden');
  dropDownMenu.classList.toggle('show');
});

// Mobile Hamburger Menu

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  const dropDown = document.querySelector('.hamburger-drop-menu');
  dropDown.classList.toggle('hidden');
  dropDown.classList.toggle('show');
});

// Image Slide

const arrows = document.querySelectorAll('.arrow');
const slides = document.querySelectorAll('.slide-img');

arrows.forEach((button) => {
  const slideArray = Array.from(slides);

  button.addEventListener('click', () => {
    if (button.classList.contains('next')) {
      const activeSlide = document.querySelector('.active-slide');
      const currentIndex = slideArray.indexOf(activeSlide);
      let newIndex;
      if (currentIndex === slideArray.length - 1) {
        newIndex = 0;
      } else {
        newIndex = currentIndex + 1;
      }
      activeSlide.classList.remove('active-slide');
      activeSlide.classList += ' hide-slide';

      const newActiveSlide = slideArray[newIndex];
      newActiveSlide.classList.remove('hide-slide');
      newActiveSlide.classList += ' active-slide';
    } else if (button.classList.contains('previous')) {
      const activeSlide = document.querySelector('.active-slide');
      const currentIndex = slideArray.indexOf(activeSlide);
      let newIndex;
      if (currentIndex === 0) {
        newIndex = slideArray.length - 1;
      } else {
        newIndex = currentIndex - 1;
      }
      activeSlide.classList.remove('active-slide');
      activeSlide.classList += ' hide-slide';

      const newActiveSlide = slideArray[newIndex];
      newActiveSlide.classList.remove('hide-slide');
      newActiveSlide.classList += ' active-slide';
    }
  });
});
