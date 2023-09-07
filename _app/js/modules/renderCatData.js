export default function renderCatData(cats) {
	// Variables
	const catPage = document.querySelector('.cats');
	const allCatsContainer = document.querySelector('.animal__container');
	
	// Function to filter 'cats' from the fetched data array
	 function filterCats(cats) {
	 return cats.filter(cat => cat._type === 'cat');
		}

	// Filter the 'cats' data
	const catsData = filterCats(cats);
  
	if (catPage) {
		renderHTML();
	};

	function returnCatDOMElement(cat) {
		const catName = cat.name;
		const catImageUrl = cat.portrait;
		const catImageAltText = cat.alternative;

		const catItemElement = document.createElement('a');
		const catImageElement = document.createElement('img');
		const catNameElement = document.createElement('h2');

		catItemElement.classList.add('animal__container-item');
		catImageElement.classList.add('animal__container-item-image');
		catNameElement.classList.add('animal__container-item-info');

		catItemElement.setAttribute('href', `/pet-info/?pet-info=${cat.slug}`);
		catImageElement.setAttribute('src', catImageUrl);
		catImageElement.setAttribute('alt', catImageAltText);
		catNameElement.textContent = catName;

		catItemElement.append(
			catImageElement,
			catNameElement
		);

		return catItemElement;
	}

	function renderHTML() {
		catsData.forEach(catData => {
			if (catPage) {
				const catCardElement = returnCatDOMElement(catData);
				allCatsContainer.appendChild(catCardElement);
			}
		});
	}
}