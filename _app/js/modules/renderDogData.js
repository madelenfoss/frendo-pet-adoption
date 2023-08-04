export default function renderDogData(dogs) {
	// Variables
	const allDogsContainer = document.querySelector('.animal__container');

	if (allDogsContainer) {
		renderHTML();
	};

	function returnDogDOMElement(dog) {
		const dogName = dog.dogName;
		const dogImageUrl = dog.dogPortrait;
		const dogImageAltText = dog.alternative;

		const dogItemElement = document.createElement('a');
		const dogImageElement = document.createElement('img');
		const dogNameElement = document.createElement('h2');

		dogItemElement.classList.add('animal__container-item');
		dogImageElement.classList.add('animal__container-item-image');
		dogNameElement.classList.add('animal__container-item-info');

		dogItemElement.setAttribute('href', `/pet-info/?pet-info=${dog.slug}`);
		dogImageElement.setAttribute('src', dogImageUrl);
		dogImageElement.setAttribute('alt', dogImageAltText);
		dogNameElement.textContent = dogName;

		dogItemElement.append(
			dogImageElement,
			dogNameElement
		);

		return dogItemElement;
	}

	function renderHTML() {
		dogs.forEach(dog => {
			if (allDogsContainer) {
				const dogCardElement = returnDogDOMElement(dog);
				allDogsContainer.appendChild(dogCardElement);
			};
		});
	}
}