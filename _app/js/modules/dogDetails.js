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
		const dogDetailsPetInfo = 
	}
}