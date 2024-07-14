"use client";

import { Badge, Cap } from "@/assets";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiSequelize, SiPostgresql, SiTypescript } from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";
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
	title: "About me",
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
			fieldName: "Freelance",
			fieldValue: "Not-Available",
		},
		{
			fieldName: "Email",
			fieldValue: "vincentius.clarishna@gmail.com",
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
			company: "Kimberly-Clark Softex",
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
			icon: <BiLogoGoLang />,
			name: "golang",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
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
													<span className="text-accent">{dt.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{dt.position}</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{dt.company}</p>
													</div>
												</li>
											))}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>
							<TabsContent value="education" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{education.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
									<ScrollArea className="h-[400px]">
										<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
											{education.items.map((dt: educationProps, index: number) => (
												<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{dt.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{dt.degree}</h3>
													<div className="flex items-center gap-3">
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{dt.institution}</p>
													</div>
												</li>
											))}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>
							<TabsContent value="skills" className="w-full h-full">
								<div className="flex flex-col gap-[30px]">
									<div className="flex flex-col gap-[30px] text-center xl:text-left">
										<h3 className="text-4xl font-bold">{skills.title}</h3>
										<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
									</div>
									<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
										{skills.skillList.map((dt: iconProps, index: number) => (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">{dt.icon}</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{dt.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										))}
									</ul>
								</div>
							</TabsContent>
							<TabsContent value="about" className="w-full text-center xl:text-left">
								<div className="flex flex-col gap-[30px]">
									<h3 className="text-4xl font-bold">{about.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
									<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
										{about.info.map((dt: aboutProps, index: number) => (
											<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
												<span className="text-white/60">{dt.fieldName}</span>
												<span className="text-xl">{dt.fieldValue}</span>
											</li>
										))}
									</ul>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</motion.div>
		</>
	);
};

export default Resume;
