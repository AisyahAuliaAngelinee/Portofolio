const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const closeIcon = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
});

iconClose.addEventListener("click", () => {
	navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => {
	menuLink.addEventListener("click", () => {
		navbarMenu.classList.remove("active");
	});
});
