export default function dogDetails(dogs) {
	const dogDetailsContainer = document.querySelector('.pet-info__container');

	const urlParams = new URLSearchParams(window.location.search);
	const slug = urlParams.get('pet-info');

	if (dogDetailsContainer) {
		renderDogHTML()
	}

	function renderDogHTML() {
		// Finds the slug of the current dog
		const currentDog = dogs.find(dog => dog.slug === slug);

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

		const dogDetailsPetInfoLiveWithBirds = document.createElement('li');
		const dogDetailsPetInfoLiveWithBirdsElement = document.createElement('b');
		const dogDetailsPetInfoLiveWithBirdsSpan = document.createElement('span');

		const dogDetailsPetInfoLiveWithChildren = document.createElement('li');
		const dogDetailsPetInfoLiveWithChildrenElement = document.createElement('b');
		const dogDetailsPetInfoLiveWithChildrenSpan = document.createElement('span');

		const dogDetailsPetInfoIdealHome = document.createElement('li');
		const dogDetailsPetInfoIdealHomeElement = document.createElement('b');
		const dogDetailsPetInfoIdealHomeSpan = document.createElement('span');

		const dogDetailsSubName = document.createElement('h2');
		const dogDetailsPetDescription = document.createElement('p');

		// Add classlist names
		dogDetailsCard.classList.add('pet-info__card');
		dogDetailsName.classList.add('pet-info__name');
		dogDetailsImageAndSoundContainer.classList.add('pet-info__image-and-sound');
		dogDetailsImage.classList.add('pet-info__image');
		dogDetailsSoundButton.classList.add('pet-info__sound');
		dogDetailsPetInfoAndDescription.classList.add('pet-info__info-and-description');
		dogDetailsPetInfo.classList.add('pet-info__info');
		dogDetailsPetInfoBreed.classList.add('pet-info__breed');
		dogDetailsPetInfoSex.classList.add('pet-info__sex');
		dogDetailsPetInfoAge.classList.add('pet-info__age');
		dogDetailsPetInfoSize.classList.add('pet-info__size');
		dogDetailsPetInfoLiveWithDogs.classList.add('pet-info__live-with-dogs');
		dogDetailsPetInfoLiveWithCats.classList.add('pet-info__live-with-cats');
		dogDetailsPetInfoLiveWithBirds.classList.add('pet-info__live-with-birds');
		dogDetailsPetInfoLiveWithChildren.classList.add('pet-info__live-with-children');
		dogDetailsPetInfoIdealHome.classList.add('pet-info__ideal-home');
		dogDetailsSubName.classList.add('pet-info__about');
		dogDetailsPetDescription.classList.add('pet-info__description');

		// Add attributes and inner text
		dogDetailsName.innerText = `${currentDog.name}`;
		dogDetailsImage.setAttribute('src', currentDog.portrait);
		dogDetailsImage.setAttribute('alt', currentDog.alternative);

		if (currentDog._type === 'dog') {
			dogDetailsSoundButton.innerText = "Hear me woof!";
	 	} else if (currentDog._type === 'cat') {
			dogDetailsSoundButton.innerText = "Hear me meow!";
		} else if (currentDog._type === 'bird') {
			dogDetailsSoundButton.innerText = "Hear me chirp!";
		}

		dogDetailsPetInfoBreedElement.innerText = "Breed: ";
		dogDetailsPetInfoBreedSpan.innerText = `${currentDog.breed}`;
		dogDetailsPetInfoSexElement.innerText = "Sex: ";
		dogDetailsPetInfoSexSpan.innerText = `${currentDog.sex}`;
		dogDetailsPetInfoAgeElement.innerText = "Age: ";
		dogDetailsPetInfoAgeSpan.innerText = `${currentDog.age}`;
		dogDetailsPetInfoSizeElement.innerText = "Size: ";
		dogDetailsPetInfoSizeSpan.innerText = `${currentDog.size}`;
		dogDetailsPetInfoLiveWithDogsElement.innerText = "Living with dogs: ";
		dogDetailsPetInfoLiveWithDogsSpan.innerText = `${currentDog.liveWithDogs}`;
		dogDetailsPetInfoLiveWithCatsElement.innerText = "Living with cats: ";
		dogDetailsPetInfoLiveWithCatsSpan.innerText = `${currentDog.liveWithCats}`;
		dogDetailsPetInfoLiveWithBirdsElement.innerText = "Living with other birds: ";
		dogDetailsPetInfoLiveWithBirdsSpan.innerText = `${currentDog.liveWithBirds}`;
		dogDetailsPetInfoLiveWithChildrenElement.innerText = "Living with children: ";
		dogDetailsPetInfoLiveWithChildrenSpan.innerText = `${currentDog.liveWithChildren}`;
		dogDetailsPetInfoIdealHomeElement.innerText = "Ideal home location: ";
		dogDetailsPetInfoIdealHomeSpan.innerText = `${currentDog.idealHome}`;
		dogDetailsSubName.innerText = `More about ${currentDog.name}`;
		dogDetailsPetDescription.innerText = `${currentDog.description}`;

		// Append elements if type of animal is dog
		if (currentDog._type === 'dog' || currentDog._type === 'cat' || currentDog._type === 'bird') {
			dogDetailsImageAndSoundContainer.append(
				dogDetailsImage,
				dogDetailsSoundButton
			)

			dogDetailsPetInfoBreed.append(
				dogDetailsPetInfoBreedElement,
				dogDetailsPetInfoBreedSpan
			)

			dogDetailsPetInfoSex.append(
				dogDetailsPetInfoSexElement,
				dogDetailsPetInfoSexSpan
			)

			dogDetailsPetInfoAge.append(
				dogDetailsPetInfoAgeElement,
				dogDetailsPetInfoAgeSpan
			)

			dogDetailsPetInfoSize.append(
				dogDetailsPetInfoSizeElement,
				dogDetailsPetInfoSizeSpan
			)

			if (currentDog._type === 'dog' || currentDog._type === 'cat') {
				dogDetailsPetInfoLiveWithDogs.append(
					dogDetailsPetInfoLiveWithDogsElement,
					dogDetailsPetInfoLiveWithDogsSpan
				)

				dogDetailsPetInfoLiveWithCats.append(
					dogDetailsPetInfoLiveWithCatsElement,
					dogDetailsPetInfoLiveWithCatsSpan
				)
			} else if (currentDog.type === 'bird') {
				dogDetailsPetInfoLiveWithBirds.append(
					dogDetailsPetInfoLiveWithBirdsElement,
					dogDetailsPetInfoLiveWithBirdsSpan
				)
			}

			dogDetailsPetInfoLiveWithChildren.append(
				dogDetailsPetInfoLiveWithChildrenElement,
				dogDetailsPetInfoLiveWithChildrenSpan
			)

			dogDetailsPetInfoIdealHome.append(
				dogDetailsPetInfoIdealHomeElement,
				dogDetailsPetInfoIdealHomeSpan
			)

			dogDetailsPetInfo.append(
				dogDetailsPetInfoBreed,
				dogDetailsPetInfoSex,
				dogDetailsPetInfoAge,
				dogDetailsPetInfoSize,
				dogDetailsPetInfoLiveWithDogs,
				dogDetailsPetInfoLiveWithCats,
				dogDetailsPetInfoLiveWithChildren,
				dogDetailsPetInfoIdealHome
			)

			dogDetailsPetInfoAndDescription.append(
				dogDetailsPetInfo,
				dogDetailsSubName,
				dogDetailsPetDescription
			)
		
			dogDetailsCard.append(
				dogDetailsName,
				dogDetailsImageAndSoundContainer,
				dogDetailsPetInfoAndDescription
			)
			
			dogDetailsContainer.appendChild(dogDetailsCard)
		}
	}
}