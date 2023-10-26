export default function mainSlideshow(slides) {

   const slideshowContainer = document.querySelector('.main__slideshow');
   const slideshowSlides = document.querySelector('.main__slideshow-slides');
   const controlButtonsContainer  = document.querySelector('.main__slideshow-controls');
   const buttonDotsContainer = document.querySelector('.main__slideshow-dots');

   if (slideshowContainer) {
      renderSanitySlides(),
      showFirstSlide()
   }

   
}
