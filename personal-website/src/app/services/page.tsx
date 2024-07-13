"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
	{
		id: 1,
		num: "01",
		title: "Web Developement",
		description:
			"A web developer must be proficient in various programming languages such as HTML, CSS, and JavaScript, as well as understanding responsiveness and accessibility to create attractive and functional websites.",
		href: "",
	},
	{
		id: 2,
		num: "02",
		title: "Frontend Development",
		description:
			"A web developer must be proficient in various programming languages such as HTML, CSS, and JavaScript, as well as understanding responsiveness and accessibility to create attractive and functional websites.",
		href: "",
	},
	{
		id: 3,
		num: "03",
		title: "Fullstack Development",
		description:
			"A web developer must be proficient in various programming languages such as HTML, CSS, and JavaScript, as well as understanding responsiveness and accessibility to create attractive and functional websites.",
		href: "",
	},
];

interface serviceProps {
	id: number;
	num: string;
	title: string;
	description: string;
}

function Services() {
	return (
		<>
			<div>services page</div>
		</>
	);
}

export default Services;
