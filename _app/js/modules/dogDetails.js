export default function dogDetails(dogs) {
	const dogDetailsContainer = document.querySelector('.pet-info__container');

	const urlParams = new URLSearchParams(window.location.search);
	const dogSlug = urlParams.get('dog');
	// const catSlug = urlParams.get('cat');
	// const birdSlug = urlParams.get('bird');
	// const bunnySlug = urlParams.get('bunny');
	// const otherSlug = urlParams.get('other');

	if (dogDetailsContainer) {
		renderHTML()
	}

	function renderHTML() {
		// Finds the slug of the current dog
		const currentDog = dogs.find(dog => dog.slug === dogSlug);

		// Create elements
		const dogDetailsCard = document.createElement('div');
		const dogDetailsName = document.createElement('h1');
		const dogDetailsImageAndSoundContainer = document.createElement('div');
		const dogDetailsImage = document.createElement('img');
		const dogDetailsSoundButton = document.createElement('button');
		const dogDetailsPetInfoAndDescription = document.createElement('div');
		const dogDetailsPetInfo = document.createElement('ul');

		const dogDetailsPetInfoBreed = document.createElement('li');
		const dogDetailsPetInfoBreedElement = document.createElement('b');
		const dogDetailsPetInfoBreedSpan = document.createElement('span');

		const dogDetailsPetInfoSex = document.createElement('li');
		const dogDetailsPetInfoSexElement = document.createElement('b');
		const dogDetailsPetInfoSexSpan = document.createElement('span');

		const dogDetailsPetInfoAge = document.createElement('li');
		const dogDetailsPetInfoAgeElement = document.createElement('b');
		const dogDetailsPetInfoAgeSpan = document.createElement('span');

		const dogDetailsPetInfoSize = document.createElement('li');
		const dogDetailsPetInfoSizeElement = document.createElement('b');
		const dogDetailsPetInfoSizeSpan = document.createElement('span');

		const dogDetailsPetInfoLiveWithDogs = document.createElement('li');
		const dogDetailsPetInfoLiveWithDogsElement = document.createElement('b');
		const dogDetailsPetInfoLiveWithDogsSpan = document.createElement('span');

		const dogDetailsPetInfoLiveWithCats = document.createElement('li');
		const dogDetailsPetInfoLiveWithCatsElement = document.createElement('b');
		const dogDetailsPetInfoLiveWithCatsSpan = document.createElement('span');

		const dogDetailsPetInfoLiveWithChildren = document.createElement('li');
		const dogDetailsPetInfoLiveWithChildrenElement = document.createElement('b');
		const dogDetailsPetInfoLiveWithChildrenSpan = document.createElement('span');

		const dogDetailsPetInfoIdealHome = document.createElement('li');
		const dogDetailsPetInfoIdealHomeElement = document.createElement('b');
		const dogDetailsPetInfoIdealHomeSpan = document.createElement('span');

		// Add classlist names
		dogDetailsCard.classList.add('');
		dogDetailsName.classList.add('');
		dogDetailsImageAndSoundContainer.classList.add('');
		dogDetailsImage.classList.add('');
		dogDetailsSoundButton.classList.add('');
		dogDetailsPetInfoAndDescription.classList.add('');
		dogDetailsPetInfo.classList.add('');

		dogDetailsPetInfoBreed.classList.add('');
		dogDetailsPetInfoSex.classList.add('');
		dogDetailsPetInfoAge.classList.add('');
		dogDetailsPetInfoSize.classList.add('');
		dogDetailsPetInfoLiveWithDogs.classList.add('');
		dogDetailsPetInfoLiveWithCats.classList.add('');
		dogDetailsPetInfoLiveWithChildren.classList.add('');
		dogDetailsPetInfoIdealHome.classList.add('');
	
	}
}