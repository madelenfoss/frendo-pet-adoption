import menuToggle from "./modules/menuToggle.js";
import petAgeConverter from "./modules/petAgeConverter.js";
import fetchAllData from "./modules/fetchAllData.js";
import renderDogData from "./modules/renderDogData.js";
import renderCatData from "./modules/renderCatData.js";
import renderBirdData from "./modules/renderBirdData.js";
import renderBunnyData from "./modules/renderBunnyData.js";
import renderOtherPetData from "./modules/renderOtherPetData.js";
import petDetails from "./modules/petDetails.js";
import mainSlideshow from "./modules/mainSlideshow.js";

const fetchedData = await fetchAllData();

menuToggle();
petAgeConverter();
renderDogData(fetchedData);
renderCatData(fetchedData);
renderBirdData(fetchedData);
renderBunnyData(fetchedData);
renderOtherPetData(fetchedData);
petDetails(fetchedData);
mainSlideshow(fetchedData);
