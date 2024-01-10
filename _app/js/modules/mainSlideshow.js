export default function mainSlideshow(slides) {

// Slideshow created with help from Alejandro Rojas' panopto 
// slideshow tutorial, with data fetched from Sanity.

// Fix slideshow issue in Sanity Studio - reorganise content - create new system
// or loop over slideshow images with for loop?

   const slideshowContainer = document.querySelector('.main__slideshow');
   const slideshowSlides = document.querySelector('.main__slideshow-slides');
   const controlButtonsContainer  = document.querySelector('.main__slideshow-controls');
   const buttonDotsContainer = document.querySelector('.main__slideshow-dots');

   // Function to filter 'slideshow' from the fetched data array
   function filterSlideshow(slides) {
   return slides.filter(slide => slide._type === 'slideshow');
      }

   // Filter the 'slideshow' data
   const slideshowData = filterSlideshow(slides);

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

      // Change arrow svg colors
      previousButtonImage.setAttribute('src', './_app/assets/icons/arrow_left.svg');
      previousButtonImage.setAttribute('aria-label', 'Click button to go to previous slide');
      nextButtonImage.setAttribute('src', './_app/assets/icons/arrow_right.svg');
      nextButtonImage.setAttribute('aria-label', 'Click button to go to next slide');

      // Double check if path is working
      for (const slide of slideshowData) {
         const slideshowSlide = document.createElement('figure');
         const slideshowSlideImage = document.createElement('img');
         const slideshowSlideCaption = document.createElement('figcaption');
         const buttonDots = document.createElement('div');

         slideshowSlide.classList.add('main__slideshow-slide');
         slideshowSlideImage.classList.add('main__slideshow-slide-image');
         slideshowSlideCaption.classList.add('main__slideshow-slide-caption');
         buttonDots.classList.add('main__slideshow-dot');

         // For loop starts here?
         slideshowSlideImage.setAttribute('src', slide.slideshowImage);
         slideshowSlideImage.setAttribute('alt', slide.slideshowAlternative);
         slideshowSlideCaption.innerText = `${slide.slideshowDescription}`;


         buttonDotsContainer.appendChild(buttonDots);

         slideshowSlide.append(
            slideshowSlideImage,
            slideshowSlideCaption,
         )

         slideshowSlides.append(
            slideshowSlide,
            buttonDotsContainer
         ) 

         slideshowContainer.append(
            slideshowSlides
         )
      }

      previousButton.appendChild(previousButtonImage);
      nextButton.appendChild(nextButtonImage);

      controlButtonsContainer.append(
         previousButton,
         nextButton
      );

      previousButton.addEventListener('click', handleButtonPreviousClick);
      nextButton.addEventListener('click', handleButtonNextClick);
   }
}

