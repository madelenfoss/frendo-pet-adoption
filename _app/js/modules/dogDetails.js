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

		const dogDetailsCard = document.createElement('div');
		const dogDetailsName = document.createElement('h1');
		const dogDetailsImageAndSoundContainer = document.createElement('div');
		const dogDetailsImage = document.createElement('img');
		const dogDetailsSoundButton = document.createElement('button');
		const dogDetailsPetInfoAndDescription = document.createElement('div');
		const dogDetailsPetInfo = document.createElement('ul');
		const dogDetailsPetInfoBreed = document.createElement('li');
		const dogDetailsPetInfoSex = document.createElement('li');
		const dogDetailsPetInfoAge = document.createElement('li');
		const dogDetailsPetInfoSize = document.createElement('li');
		const dogDetailsPetInfoLiveWithDogs = document.createElement('li');
		const dogDetailsPetInfoLiveWithCats = document.createElement('li');
		const dogDetailsPetInfoLiveWithChildren = document.createElement('li');
		const dogDetailsPetInfoIdealHome = document.createElement('li');
	}
}