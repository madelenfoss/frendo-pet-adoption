export default function mainSlideshow(slides) {

// Slideshow created with help from Alejandro Rojas' panopto 
// slideshow tutorial, with data fetched from Sanity.

   const slideshowContainer = document.querySelector('.main__slideshow');
   const slideshowSlides = document.querySelector('.main__slideshow-slides');
   const controlButtonsContainer  = document.querySelector('.main__slideshow-controls');
   const buttonDotsContainer = document.querySelector('.main__slideshow-dots');

   if (slideshowContainer) {
      renderSanitySlides(),
      showFirstSlideWhenEnteringPage()
   }

   function handleButtonPreviousClick(event) {
      previousSlide();
      updateSlideshowHTML();
   }

   function handleButtonNextClick(event) {
      nextSlide();
      updateSlideshowHTML();
   }

   // To make sure first image is active and displayed when entering page
   function showFirstSlideWhenEnteringPage() {
      const slideshowSlides = document.querySelectorAll('.main__slideshow-slide');
      const buttonDots = document.querySelectorAll('.main__slideshow-dot');

      slideshowSlides[0].classList.add('main__slideshow-slide--active');
      buttonDots[0].classList.add('main__slideshow-dot--active');
   }

   function renderSanitySlides() {
      const previousButton = document.createElement('button');
      const previousButtonImage = document.createElement('img');
      const nextButton = document.createElement('button');
      const nextButtonImage = document.createElement('img');

      previousButton.classList.add('main__slideshow-previous-button');
      nextButton.classList.add('main__slideshow-next-button');

      // Find new arrow images
      previousButtonImage.setAttribute('src', './_app/assets/icons/previousbuttonimg.png');
      previousButtonImage.setAttribute('aria-label', 'Click button to go to previous slide');
      nextButtonImage.setAttribute('src', './_app/assets/icons/nextbuttonimg.png');
      nextButtonImage.setAttribute('aria-label', 'Click button to go to next slide');
   }
}

