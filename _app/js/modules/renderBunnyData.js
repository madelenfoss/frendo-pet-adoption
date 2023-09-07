export default function renderBunnyData(bunnies) {
	// Variables
	const bunnyPage = document.querySelector('.bunnies');
	const allBunniesContainer = document.querySelector('.animal__container');
	
	// Function to filter 'bunnies' from the fetched data array
	 function filterBunnies(bunnies) {
	 return bunnies.filter(bunny => bunny._type === 'bunny');
		}

	// Filter the 'bunnies' data
	const bunniesData = filterBunnies(bunnies);
  
	if (bunnyPage) {
		renderHTML();
	};

	function returnBunnyDOMElement(bunny) {
		const bunnyName = bunny.name;
		const bunnyImageUrl = bunny.portrait;
		const bunnyImageAltText = bunny.alternative;

		const bunnyItemElement = document.createElement('a');
		const bunnyImageElement = document.createElement('img');
		const bunnyNameElement = document.createElement('h2');

		bunnyItemElement.classList.add('animal__container-item');
		bunnyImageElement.classList.add('animal__container-item-image');
		bunnyNameElement.classList.add('animal__container-item-info');

		bunnyItemElement.setAttribute('href', `/pet-info/?pet-info=${bunny.slug}`);
		bunnyImageElement.setAttribute('src', bunnyImageUrl);
		bunnyImageElement.setAttribute('alt', bunnyImageAltText);
		bunnyNameElement.textContent = bunnyName;

		bunnyItemElement.append(
			bunnyImageElement,
			bunnyNameElement
		);

		return bunnyItemElement;
	}

	function renderHTML() {
		bunniesData.forEach(bunnyData => {
			if (bunnyPage) {
				const bunnyCardElement = returnBunnyDOMElement(bunnyData);
				allBunniesContainer.appendChild(bunnyCardElement);
			}
		});
	}
}