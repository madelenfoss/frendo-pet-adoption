import menuToggle from "./modules/menuToggle.js";
import petAgeConverter from "./modules/petAgeConverter.js";
import fetchAllData from "./modules/fetchAllData.js";
import renderDogData from "./modules/renderDogData.js";

const fetchedData = await fetchAllData();

menuToggle();
petAgeConverter();
renderDogData(fetchedData);