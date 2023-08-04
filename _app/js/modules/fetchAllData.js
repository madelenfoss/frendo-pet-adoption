import { sanity } from "../sanity.js";

export default async function fetchAllData() {
	const query =
	`*[_type in ["dog", "cat", "bunny", "bird", "other", "slideshow", "shopItem"]] {
		dogName,
		dogPortrait,
		dogAlternative,
		name,
		"slug": slug.current,
		breed,
		sex,
		age,
		size,
		date,
		description,
		liveWithChildren,
		liveWithCats,
		liveWithDogs,
		liveWithBunnies,
		liveWithBirds,
		idealHome,
		"portrait": portrait.asset->url,
		"alternative": portrait.alternative,
		"credits": portrait.credits,
		"dogSound": woof.asset->url ,
		"catSound": meow.asset->url,
		"birdSound": chirp.asset->url,
		"slideshowImages": slideshowImages[].image.asset->url,
		"slideshowAlternative": slideshowImages[].altText,
		"slideshowCredits": slideshowImages[].photographer,
	 }`;

	 const allData = await sanity.fetch(query);
	 
	 return allData;

	 /* Add try/catch */
}