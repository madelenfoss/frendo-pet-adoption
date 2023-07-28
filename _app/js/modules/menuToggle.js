export default function menuToggle() {
	let navigationVisible = true;

	const navigationMenu = document.querySelector('.navbar__menu');
	const navigationMenuIcon = document.querySelector('.navbar__mobile-menu-icon');

	navigationMenuIcon.addEventListener('click', handleNavigationMenuIconClick);

	function handleNavigationMenuIconClick(event) {
		toggleNavigation();
		renderHTML();
	}

	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	function renderHTML() {
		if (navigationVisible === false) {
			navigationMenu.classList.add('navbar__menu--visible');
		} else {
			navigationMenu.classList.remove('navbar__menu--visible');
		}
	}
}