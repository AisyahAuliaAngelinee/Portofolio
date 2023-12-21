const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const closeIcon = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
	navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => [
	menuLink.addEventListener("click", () => {
		navbarMenu.classList.remove("active");
	}),
]);

function scrollHeader() {
	const header = document.getElementById("header");
	this.scrollY >= 20 ? header.classList.add("active") : header.classList.remove("active");
}

window.addEventListener("scroll", scrollHeader);
