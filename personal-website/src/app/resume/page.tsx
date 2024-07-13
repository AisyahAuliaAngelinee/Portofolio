"use client";

import { Badge, Cap, Golang } from "@/assets";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiSequelize, SiPostgresql, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface aboutProps {
	fieldName: string;
	fieldValue: string;
}

interface experienceProps {
	company: string;
	position: string;
	duration: string;
}

interface educationProps {
	institution: string;
	degree: string;
	duration: string;
}

interface iconProps {
	icon: any;
	name: string;
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
	title: "My experience",
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

const education = {
	icon: Cap,
	title: "My education",
	description:
		"I graduated with a Bachelor's degree in Information Systems from Multimedia Nusantara University and furthered my education at Hacktiv8 Bootcamp, specializing in Fullstack JavaScript. This training has equipped me to pursue a career as a web developer.",
	items: [
		{
			institution: "Bootcamp Hacktiv8 Online Course",
			degree: "Golang Backend Developer",
			duration: "March 2024",
		},
		{
			institution: "Bootcamp Hacktiv8 Offline Course",
			degree: "Fullstack Javascript Immersive",
			duration: "September 2023 - January 2024",
		},
		{
			institution: "Multimedia Nusantara University",
			degree: "Information Systems",
			duration: "July 2018 - July 2023",
		},
	],
};

const skills = {
	title: "My skills",
	description:
		"I have skills in web programming, specializing in frontend development, and also possess basic skills in backend development. This combination allows me to create comprehensive and dynamic web applications.",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "html",
		},
		{
			icon: <FaCss3 />,
			name: "css",
		},
		{
			icon: <FaJs />,
			name: "javascript",
		},
		{
			icon: <SiTypescript />,
			name: "typescript",
		},
		{
			icon: <FaReact />,
			name: "react.js",
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <SiExpress />,
			name: "express.js",
		},
		{
			icon: <SiSequelize />,
			name: "sequelize",
		},
		{
			icon: <SiPostgresql />,
			name: "postgreSQL",
		},
		{
			icon: Golang,
			name: "golang",
		},
	],
};

const Resume = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
				className="min-h-[80dvh] flex items-center justify-center py-12 xl:py-0">
				<div className="container mx-auto">
					<Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
						<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
							<TabsTrigger value="experience">Experience</TabsTrigger>
							<TabsTrigger value="education">Education</TabsTrigger>
							<TabsTrigger value="skills">Skills</TabsTrigger>
							<TabsTrigger value="about">About Me</TabsTrigger>
						</TabsList>

						<div className="min-h-[70dvh] w-full">
							<TabsContent value="experience" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{experience.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
									<ScrollArea className="h-[400px]">
										<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
											{experience.items.map((dt: experienceProps, index: number) => (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span>{dt.duration}</span>
													<h3>{dt.position}</h3>
													<div>
														<span></span>
														<p>{dt.company}</p>
													</div>
												</li>
											))}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>
							<TabsContent value="education" className="w-full">
								education
							</TabsContent>
							<TabsContent value="skills" className="w-full">
								skills
							</TabsContent>
							<TabsContent value="about" className="w-full">
								about me
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</motion.div>
		</>
	);
};

export default Resume;
