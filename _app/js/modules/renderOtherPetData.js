export default function renderOtherPetData(otherPets) {
	// Variables
	const otherPetPage = document.querySelector('.others');
	const allOtherPetsContainer = document.querySelector('.animal__container');
	
	// Function to filter 'other pets' from the fetched data array
	 function filterOtherPets(otherPets) {
	 return otherPets.filter(otherPet => otherPet._type === 'other');
		}

	// Filter the 'other pets' data
	const otherPetsData = filterOtherPets(otherPets);
  
	if (otherPetPage) {
		renderHTML();
	};

	function returnOtherPetDOMElement(otherPet) {
		const otherPetName = otherPet.name;
		const otherPetImageUrl = otherPet.portrait;
		const otherPetImageAltText = otherPet.alternative;

		const otherPetItemElement = document.createElement('a');
		const otherPetImageElement = document.createElement('img');
		const otherPetNameElement = document.createElement('h2');

		otherPetItemElement.classList.add('animal__container-item');
		otherPetImageElement.classList.add('animal__container-item-image');
		otherPetNameElement.classList.add('animal__container-item-info');

		otherPetItemElement.setAttribute('href', `/pet-info/?pet-info=${otherPet.slug}`);
		otherPetImageElement.setAttribute('src', otherPetImageUrl);
		otherPetImageElement.setAttribute('alt', otherPetImageAltText);
		otherPetNameElement.textContent = otherPetName;

		otherPetItemElement.append(
			otherPetImageElement,
			otherPetNameElement
		);

		return otherPetItemElement;

	}

	function renderHTML() {
		otherPetsData.forEach(otherPetData => {
			if (otherPetPage) {
				const otherPetCardElement = returnOtherPetDOMElement(otherPetData);
				allOtherPetsContainer.appendChild(otherPetCardElement);
			}
		});
	}
}