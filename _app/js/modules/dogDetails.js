export default function dogDetails(dogs) {
	const dogDetailsContainer = document.querySelector('.pet-info__container');

	const urlParams = new URLSearchParams(window.location.search);
	const dogSlug = urlParams.get('dog');
	const catSlug = urlParams.get('cat');
	const birdSlug = urlParams.get('bird');
	const bunnySlug = urlParams.get('bunny');
	const otherSlug = urlParams.get('other');
}