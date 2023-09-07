export default function renderBirdData(birds) {
	// Variables
	const birdPage = document.querySelector('.birds');
	const allBirdsContainer = document.querySelector('.animal__container');
	
	// Function to filter 'birds' from the fetched data array
	 function filterBirds(birds) {
	 return birds.filter(bird => bird._type === 'bird');
		}

	// Filter the 'birds' data
	const birdsData = filterBirds(birds);
  
	if (birdPage) {
		renderHTML();
	};

	function returnbirdDOMElement(bird) {
		const birdName = bird.name;
		const birdImageUrl = bird.portrait;
		const birdImageAltText = bird.alternative;

		const birdItemElement = document.createElement('a');
		const birdImageElement = document.createElement('img');
		const birdNameElement = document.createElement('h2');

		birdItemElement.classList.add('animal__container-item');
		birdImageElement.classList.add('animal__container-item-image');
		birdNameElement.classList.add('animal__container-item-info');

		birdItemElement.setAttribute('href', `/pet-info/?pet-info=${bird.slug}`);
		birdImageElement.setAttribute('src', birdImageUrl);
		birdImageElement.setAttribute('alt', birdImageAltText);
		birdNameElement.textContent = birdName;

		birdItemElement.append(
			birdImageElement,
			birdNameElement
		);

		return birdItemElement;
	}

	function renderHTML() {
		birdsData.forEach(birdData => {
			if (birdPage) {
				const birdCardElement = returnbirdDOMElement(birdData);
				allBirdsContainer.appendChild(birdCardElement);
			}
		});
	}
}