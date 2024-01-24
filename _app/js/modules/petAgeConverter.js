export default function petAgeConverter() {
	
	/* 
	please take these numbers 
	with a pinch of salt
	
	1 human year =
	8 cat years
	7 dog years
	16 budgie years
	4 parrot years
	10 bunny years
	*/

	const humanYearsInput = document.querySelector('#human');

	/* check if element exists before attempting to add an event listener */
	if (humanYearsInput) {
		humanYearsInput.addEventListener('input', () => {
			document.querySelector('.converter__output-dog').innerHTML = humanYearsInput.value * 7;
			document.querySelector('.converter__output-cat').innerHTML = humanYearsInput.value * 8;
			document.querySelector('.converter__output-budgie').innerHTML = humanYearsInput.value * 16;
			document.querySelector('.converter__output-parrot').innerHTML = humanYearsInput.value * 4;
			document.querySelector('.converter__output-bunny').innerHTML = humanYearsInput.value * 10;
		});
	}
}