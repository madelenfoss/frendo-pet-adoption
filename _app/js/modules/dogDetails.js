export default function dogDetails(dogs) {
	const dogDetailsContainer = document.querySelector('.pet-info__container');

	const urlParams = new URLSearchParams(window.location.search);
	const slug = urlParams.get('pet-info');

	if (dogDetailsContainer) {
		renderHTML()
	}

	function renderHTML() {
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
		dogDetailsPetInfoLiveWithChildren.classList.add('pet-info__live-with-children');
		dogDetailsPetInfoIdealHome.classList.add('pet-info__ideal-home');
		dogDetailsSubName.classList.add('pet-info__about');
		dogDetailsPetDescription.classList.add('pet-info__description');

		// Add attributes and inner text
		dogDetailsName.innerText = `${currentDog.name}`;
		dogDetailsImage.setAttribute('src', currentDog.portrait);
		dogDetailsImage.setAttribute('alt', currentDog.alternative);
		dogDetailsSoundButton.innerText = "Hear me woof!";
		dogDetailsPetInfoBreedElement.innerText = "Breed:";
		dogDetailsPetInfoBreedSpan.innerText = `${currentDog.breed}`;
		dogDetailsPetInfoSexElement.innerText = "Sex:";
		dogDetailsPetInfoSexSpan.innerText = `${currentDog.sex}`;
		dogDetailsPetInfoAgeElement.innerText = "Age:";
		dogDetailsPetInfoAgeSpan.innerText = `${currentDog.age}`;
		dogDetailsPetInfoSizeElement.innerText = "Size:";
		dogDetailsPetInfoSizeSpan.innerText = `${currentDog.size}`;
		dogDetailsPetInfoLiveWithDogsElement.innerText = "Living with dogs:";
		dogDetailsPetInfoLiveWithDogsSpan.innerText = `${currentDog.liveWithDogs}`;
		dogDetailsPetInfoLiveWithCatsElement.innerText = "Living with cats:";
		dogDetailsPetInfoLiveWithCatsSpan.innerText = `${currentDog.liveWithCats}`;
		dogDetailsPetInfoLiveWithChildrenElement.innerText = "Living with children:";
		dogDetailsPetInfoLiveWithChildrenSpan.innerText = `${currentDog.liveWithChildren}`;
		dogDetailsPetInfoIdealHomeElement.innerText = "Ideal home location:";
		dogDetailsPetInfoIdealHomeSpan.innerText = `${currentDog.idealHome}`;
		dogDetailsSubName.innerText = `More about ${currentDog.name}`;
		dogDetailsPetDescription.innerText = `${currentDog.description}`;

		// Append elements
		dogDetailsImageAndSoundContainer.append(
			dogDetailsImage,
			dogDetailsSoundButton
		)

		dogDetailsPetInfo.append(
			dogDetailsPetInfoBreed,
			dogDetailsPetInfoSex,
			dogDetailsPetInfoAge,
			dogDetailsPetInfoSize,
			dogDetailsPetInfoLiveWithDogs,
			dogDetailsPetInfoLiveWithCats,
			dogDetailsPetInfoLiveWithChildren
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