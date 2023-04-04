// Drop Down Menu

const drop = document.querySelector('.drop-down-a');
const dropDownMenu = document.querySelector('.drop-down-menu');

drop.addEventListener('click', () => {
  dropDownMenu.classList.toggle('hidden');
  dropDownMenu.classList.toggle('show');
});

// Mobile Hamburger Menu

const hamburger = document.querySelector('.hamburger-drop-down');

hamburger.addEventListener('click', () => {
  const dropDown = document.querySelector('.hamburger-drop-menu');
  dropDown.classList.toggle('hidden');
  dropDown.classList.toggle('show');
});

// Image Slide

const arrows = document.querySelectorAll('.arrow');
const slides = document.querySelectorAll('.slide-img');
const slideArray = Array.from(slides);
const circleBtns = document.querySelectorAll('.circle');
const circleArray = Array.from(circleBtns);

function changeSlides(index) {
  const activeSlide = document.querySelector('.active-slide');
  activeSlide.classList.remove('active-slide');
  activeSlide.classList += ' hide-slide';
  const newActiveSlide = slideArray[index];
  newActiveSlide.classList.remove('hide-slide');
  newActiveSlide.classList += ' active-slide';
}

function nextSlide() {
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

  const currentActiveCircle = document.querySelector('.active');
  currentActiveCircle.classList.remove('active');
  const newCircle = circleArray[newIndex];
  newCircle.classList += ' active';
}

function slideTimeout() {
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

  const currentActiveCircle = document.querySelector('.active');
  currentActiveCircle.classList.remove('active');
  const newCircle = circleArray[newIndex];
  newCircle.classList += ' active';
  setTimeout(slideTimeout, 5000);
}

setTimeout(slideTimeout, 5000);

arrows.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('next')) {
      nextSlide();
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

      const currentActiveCircle = document.querySelector('.active');
      currentActiveCircle.classList.remove('active');
      const newCircle = circleArray[newIndex];
      newCircle.classList += ' active';
    }
  });
});

circleBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const thisIndex = circleArray.indexOf(button);
    changeSlides(thisIndex);

    const currentActiveCircle = document.querySelector('.active');
    currentActiveCircle.classList.remove('active');

    button.classList += ' active';
  });
});
