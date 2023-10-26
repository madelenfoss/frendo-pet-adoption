export default function mainSlideshow(slides) {

   const slideshowContainer = document.querySelector('.main__slideshow');
   const slideshowSlides = document.querySelector('.main__slideshow-slides');
   const controlButtonsContainer  = document.querySelector('.main__slideshow-controls');
   const buttonDotsContainer = document.querySelector('.main__slideshow-dots');

   if (slideshowContainer) {
      renderSanitySlides(),
      showFirstSlide()
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
   }
}
