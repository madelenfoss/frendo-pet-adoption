export default function petDetails(pets) {
	const petDetailsContainer = document.querySelector('.pet-info__container');

	const urlParams = new URLSearchParams(window.location.search);
	const slug = urlParams.get('pet-info');

	if (petDetailsContainer) {
		renderPetHTML()
	}

	function renderPetHTML() {
		// Finds the slug of the current pet
		const currentPet = pets.find(pet => pet.slug === slug);

		// Create elements
		const backToPreviousPage = document.createElement('a');
		const petDetailsCard = document.createElement('div');
		const petDetailsName = document.createElement('h1');
		const petDetailsImageAndSoundContainer = document.createElement('div');
		const petDetailsImage = document.createElement('img');
		const petDetailsSoundButton = document.createElement('button');
		const petDetailsInfoAndDescription = document.createElement('div');
		const petDetailsInfo = document.createElement('ul');

		const petDetailsInfoBreed = document.createElement('li');
		const petDetailsInfoBreedElement = document.createElement('b');
		const petDetailsInfoBreedSpan = document.createElement('span');

		const petDetailsInfoSex = document.createElement('li');
		const petDetailsInfoSexElement = document.createElement('b');
		const petDetailsInfoSexSpan = document.createElement('span');

		const petDetailsInfoAge = document.createElement('li');
		const petDetailsInfoAgeElement = document.createElement('b');
		const petDetailsInfoAgeSpan = document.createElement('span');

		const petDetailsInfoSize = document.createElement('li');
		const petDetailsInfoSizeElement = document.createElement('b');
		const petDetailsInfoSizeSpan = document.createElement('span');

		const petDetailsInfoLiveWithDogs = document.createElement('li');
		const petDetailsInfoLiveWithDogsElement = document.createElement('b');
		const petDetailsInfoLiveWithDogsSpan = document.createElement('span');

		const petDetailsInfoLiveWithCats = document.createElement('li');
		const petDetailsInfoLiveWithCatsElement = document.createElement('b');
		const petDetailsInfoLiveWithCatsSpan = document.createElement('span');

		const petDetailsInfoLiveWithBirds = document.createElement('li');
		const petDetailsInfoLiveWithBirdsElement = document.createElement('b');
		const petDetailsInfoLiveWithBirdsSpan = document.createElement('span');

		const petDetailsInfoLiveWithBunnies = document.createElement('li');
		const petDetailsInfoLiveWithBunniesElement = document.createElement('b');
		const petDetailsInfoLiveWithBunniesSpan = document.createElement('span');

		const petDetailsInfoLiveWithChildren = document.createElement('li');
		const petDetailsInfoLiveWithChildrenElement = document.createElement('b');
		const petDetailsInfoLiveWithChildrenSpan = document.createElement('span');

		const petDetailsInfoIdealHome = document.createElement('li');
		const petDetailsInfoIdealHomeElement = document.createElement('b');
		const petDetailsInfoIdealHomeSpan = document.createElement('span');

		const petDetailsSubName = document.createElement('h2');
		const petDetailsDescription = document.createElement('p');

		// Add classlist names
		backToPreviousPage.classList.add('pet-info__back');
		petDetailsCard.classList.add('pet-info__card');
		petDetailsName.classList.add('pet-info__name');
		petDetailsImageAndSoundContainer.classList.add('pet-info__image-and-sound');
		petDetailsImage.classList.add('pet-info__image');
		petDetailsSoundButton.classList.add('pet-info__sound');
		petDetailsInfoAndDescription.classList.add('pet-info__info-and-description');
		petDetailsInfo.classList.add('pet-info__info');
		petDetailsInfoBreed.classList.add('pet-info__breed');
		petDetailsInfoSex.classList.add('pet-info__sex');
		petDetailsInfoAge.classList.add('pet-info__age');
		petDetailsInfoSize.classList.add('pet-info__size');
		petDetailsInfoLiveWithDogs.classList.add('pet-info__live-with-dogs');
		petDetailsInfoLiveWithCats.classList.add('pet-info__live-with-cats');
		petDetailsInfoLiveWithBirds.classList.add('pet-info__live-with-birds');
		petDetailsInfoLiveWithBunnies.classList.add('pet-info__live-with-bunnies');
		petDetailsInfoLiveWithChildren.classList.add('pet-info__live-with-children');
		petDetailsInfoIdealHome.classList.add('pet-info__ideal-home');
		petDetailsSubName.classList.add('pet-info__about');
		petDetailsDescription.classList.add('pet-info__description');

		// Add attributes and inner text based on pet type
		if (currentPet._type === 'dog') {
			backToPreviousPage.setAttribute('href', '../dogs/');
			backToPreviousPage.innerText = "Back to dogs";
		} else if (currentPet._type === 'cat') {
			backToPreviousPage.setAttribute('href', '../cats/');
			backToPreviousPage.innerText = "Back to cats";
		} else if (currentPet._type === 'bird') {
			backToPreviousPage.setAttribute('href', '../birds/');
			backToPreviousPage.innerText = "Back to birds";
		} 	else if (currentPet._type === 'bunny') {
			backToPreviousPage.setAttribute('href', '../bunnies/');
			backToPreviousPage.innerText = "Back to bunnies";
		}	else if (currentPet._type === 'other') {
			backToPreviousPage.setAttribute('href', '../other/');
			backToPreviousPage.innerText = "Back to other pets";
		}

		petDetailsName.innerText = `${currentPet.name}`;
		petDetailsImage.setAttribute('src', currentPet.portrait);
		petDetailsImage.setAttribute('alt', currentPet.alternative);

		// Add different text to sound button based on what kind of animal they are
		if (currentPet._type === 'dog') {
			petDetailsSoundButton.innerText = "Hear me woof!";
	 	} else if (currentPet._type === 'cat') {
			petDetailsSoundButton.innerText = "Hear me meow!";
		} else if (currentPet._type === 'bird') {
			petDetailsSoundButton.innerText = "Hear me chirp!";
		};

		petDetailsInfoBreedElement.innerText = "Breed: ";
		petDetailsInfoBreedSpan.innerText = `${currentPet.breed}`;
		petDetailsInfoSexElement.innerText = "Sex: ";
		petDetailsInfoSexSpan.innerText = `${currentPet.sex}`;
		petDetailsInfoAgeElement.innerText = "Age: ";
		petDetailsInfoAgeSpan.innerText = `${currentPet.age}`;
		petDetailsInfoSizeElement.innerText = "Size: ";
		petDetailsInfoSizeSpan.innerText = `${currentPet.size}`;
		petDetailsInfoLiveWithDogsElement.innerText = "Living with dogs: ";
		petDetailsInfoLiveWithDogsSpan.innerText = `${currentPet.liveWithDogs}`;
		petDetailsInfoLiveWithCatsElement.innerText = "Living with cats: ";
		petDetailsInfoLiveWithCatsSpan.innerText = `${currentPet.liveWithCats}`;
		petDetailsInfoLiveWithBirdsElement.innerText = "Living with other birds: ";
		petDetailsInfoLiveWithBirdsSpan.innerText = `${currentPet.liveWithBirds}`;
		petDetailsInfoLiveWithBunniesElement.innerText = "Living with other bunnies: ";
		petDetailsInfoLiveWithBunniesSpan.innerText = `${currentPet.liveWithBunnies}`;
		petDetailsInfoLiveWithChildrenElement.innerText = "Living with children: ";
		petDetailsInfoLiveWithChildrenSpan.innerText = `${currentPet.liveWithChildren}`;
		petDetailsInfoIdealHomeElement.innerText = "Ideal home location: ";
		petDetailsInfoIdealHomeSpan.innerText = `${currentPet.idealHome}`;
		petDetailsSubName.innerText = `More about ${currentPet.name}`;
		petDetailsDescription.innerText = `${currentPet.description}`;

		// Create and add event listener for sound button
		const petSoundButton = new Audio();

		if (currentPet._type === 'dog') {
			petSoundButton.src = currentPet.dogSound;
		} else if (currentPet._type === 'cat') {
			petSoundButton.src = currentPet.catSound;
		} else if (currentPet._type === 'bird') {
			petSoundButton.src = currentPet.birdSound;
		}

		petDetailsSoundButton.addEventListener('click', () => {
			petSoundButton.play();
		});

		// Appending the sound button for dogs, cats and birds only
		if (currentPet._type === 'dog' || currentPet._type === 'cat' || currentPet._type === 'bird') {
			petDetailsImageAndSoundContainer.append(
				petDetailsImage,
				petDetailsSoundButton
			)
		} else {
			petDetailsImageAndSoundContainer.append(
				petDetailsImage
			)
		};

		petDetailsInfoBreed.append(
			petDetailsInfoBreedElement,
			petDetailsInfoBreedSpan
		)

		petDetailsInfoSex.append(
			petDetailsInfoSexElement,
			petDetailsInfoSexSpan
		)

		petDetailsInfoAge.append(
			petDetailsInfoAgeElement,
			petDetailsInfoAgeSpan
		)

		petDetailsInfoSize.append(
			petDetailsInfoSizeElement,
			petDetailsInfoSizeSpan
		)

		// If statement to append different details for each animal type
		if (currentPet._type === 'dog' || currentPet._type === 'cat') {
			petDetailsInfoLiveWithDogs.append(
				petDetailsInfoLiveWithDogsElement,
				petDetailsInfoLiveWithDogsSpan
			)

			petDetailsInfoLiveWithCats.append(
				petDetailsInfoLiveWithCatsElement,
				petDetailsInfoLiveWithCatsSpan
			)
		} else if (currentPet._type === 'bird') {
			petDetailsInfoLiveWithBirds.append(
				petDetailsInfoLiveWithBirdsElement,
				petDetailsInfoLiveWithBirdsSpan
			)
		} else if (currentPet._type === 'bunny') {
			petDetailsInfoLiveWithBunnies.append(
				petDetailsInfoLiveWithBunniesElement,
				petDetailsInfoLiveWithBunniesSpan
			)
		};

		petDetailsInfoLiveWithChildren.append(
			petDetailsInfoLiveWithChildrenElement,
			petDetailsInfoLiveWithChildrenSpan
		)

		petDetailsInfoIdealHome.append(
			petDetailsInfoIdealHomeElement,
			petDetailsInfoIdealHomeSpan
		)

		if (currentPet._type === 'dog' || currentPet._type === 'cat') {
			petDetailsInfo.append(
				petDetailsInfoBreed,
				petDetailsInfoSex,
				petDetailsInfoAge,
				petDetailsInfoSize,
				petDetailsInfoLiveWithDogs,
				petDetailsInfoLiveWithCats,
				petDetailsInfoLiveWithChildren,
				petDetailsInfoIdealHome
			)
		} else if (currentPet._type === 'bird') {
			petDetailsInfo.append(
				petDetailsInfoBreed,
				petDetailsInfoSex,
				petDetailsInfoAge,
				petDetailsInfoSize,
				petDetailsInfoLiveWithBirds,
				petDetailsInfoLiveWithChildren,
				petDetailsInfoIdealHome
			)
		} else if (currentPet._type === 'bunny') {
			petDetailsInfo.append(
				petDetailsInfoBreed,
				petDetailsInfoSex,
				petDetailsInfoAge,
				petDetailsInfoSize,
				petDetailsInfoLiveWithBunnies,
				petDetailsInfoLiveWithChildren,
				petDetailsInfoIdealHome
			)
		} else if (currentPet._type === 'other') {
			petDetailsInfo.append(
				petDetailsInfoBreed,
				petDetailsInfoSex,
				petDetailsInfoAge,
				petDetailsInfoSize,
				petDetailsInfoLiveWithChildren,
				petDetailsInfoIdealHome
			)
		};

		petDetailsInfoAndDescription.append(
			petDetailsInfo,
			petDetailsSubName,
			petDetailsDescription
		)
	
		petDetailsCard.append(
			petDetailsName,
			petDetailsImageAndSoundContainer,
			petDetailsInfoAndDescription
		)
		
		petDetailsContainer.append(
			petDetailsCard,
			backToPreviousPage
			)
	}
}