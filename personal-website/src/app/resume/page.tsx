"use client";

import { Badge } from "@/assets";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiSequelize, SiPostgresql, SiTypescript } from "react-icons/si";

interface infoProps {
	fieldName: string;
	fieldValue: string;
}

interface itemProps {
	company: string;
	position: string;
	duration: string;
}

const about = {
	id: 1,
	title: "about me",
	description:
		"A website developer enthusiast passionate about frontend design with basic backend skills. I transitioned from a System Analyst Internship in the manufacturing industry to pursue my lifelong passion for web development, completing an Information Systems degree at Multimedia Nusantara University and a Hacktiv8 Bootcamp as a Full Stack JavaScript Web Developer.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Vincentius Clarishna",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+62) 813 9999 9650",
		},
		{
			fieldName: "Experience",
			fieldValue: "11 months",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Indonesia",
		},
		{
			fieldName: "Email",
			fieldValue: "vincentius.clarishna@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Not-Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "Indonesia, English",
		},
	],
};

const experience = {
	icon: Badge,
	title: "My Experience",
	description:
		"I have one year of internship experience as a System Analyst and have since built my career as a Frontend Developer. My journey in frontend development continues to grow and evolve.",
	items: [
		{
			company: "Konstruksi.AI",
			position: "Frontend Developer",
			duration: "March 2024 - Present",
		},
		{
			company: "Kimberly-Clark Softex (PT. Softex Indonesia)",
			position: "System Analyst Intern",
			duration: "July 2022 - July 2023",
		},
	],
};

const Resume = () => {
	return (
		<>
			<div>resume page</div>
		</>
	);
};

export default Resume;
