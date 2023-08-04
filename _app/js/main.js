import menuToggle from "./modules/menuToggle.js";
import petAgeConverter from "./modules/petAgeConverter.js";
import fetchAllPetData from "./modules/fetchAllPetData.js";
import renderDogData from "./modules/renderDogData.js";

const fetchedPetData = await fetchAllPetData();

menuToggle();
petAgeConverter();
renderDogData(fetchedPetData);