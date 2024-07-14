"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiShadcnui } from "react-icons/si";
import { TbBrandThreejs, TbBrandFramerMotion } from "react-icons/tb";
import { Thumb1, Thumb2 } from "@/assets";
import WorkSliderBtn from "@/components/WorkSliderBtn";

interface stackProps {
	icon: any;
	name: string;
}

interface projectProps {
	num: string;
	category: string;
	title: string;
	description: string;
	stack: stackProps[];
	image: any;
	link: string;
	github: string;
}

const projects = [
	{
		num: "01",
		category: "frontend",
		title: "3D Shirt Customizer",
		description:
			"3D shirt customizer that allows users to upload their own images and freely change the colors or logos. This interactive tool provides a personalized and dynamic experience for designing custom shirts.",
		stack: [
			{
				icon: <TbBrandThreejs />,
				name: "three.js",
			},
			{
				icon: <FaJs />,
				name: "javascript",
			},
			{
				icon: <FaReact />,
				name: "react.js",
			},
			{
				icon: <SiTailwindcss />,
				name: "tailwind.css",
			},
		],
		image: Thumb1,
		link: "https://3-d-product-base.vercel.app/",
		github: "https://github.com/AisyahAuliaAngelinee/3D-Shirt-Customizer",
	},
	{
		num: "02",
		category: "frontend",
		title: "Personal Portofolio Website",
		description:
			"My portfolio website introduces myself and showcases the web projects I have completed, along with my skills in web programming. It also highlights the educational background and training I have undergone before starting my career.",
		stack: [
			{
				icon: <SiNextdotjs />,
				name: "next.js",
			},
			{
				icon: <SiTailwindcss />,
				name: "tailwind.css",
			},
			{
				icon: <FaCss3 />,
				name: "css",
			},
			{
				icon: <TbBrandFramerMotion />,
				name: "framer-motion",
			},
			{
				icon: <SiShadcnui />,
				name: "shadcn ui",
			},
			{
				icon: <SiTypescript />,
				name: "typescript",
			},
		],
		image: Thumb2,
		link: "",
		github: "",
	},
];

const Work = () => {
	const [project, setProject] = useState<projectProps>(projects[0]);

	const handleSlideChange = (swiper: any) => {
		const currentIndex = swiper.activeIndex;
		setProject(projects[currentIndex]);
	};

	return (
		<>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						delay: 2.4,
						duration: 0.4,
						ease: "easeIn",
					},
				}}
				className="min-h-[80dvh] flex flex-col justify-center py-12 xl:py-0">
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row xl:gap-[30px]">
						<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
							<div className="flex flex-col gap-[30px] h-[50%]">
								<div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ease-in-out capitalize">{project.title}</h2>
								<p className="capitalize text-accent/70">{project.category} Project</p>
								<p className="text-white/60">{project.description}</p>
								<ul className="flex gap-4">
									{project.stack.map((dt: stackProps, index: number) => (
										<li key={index} className="text-xl text-accent">
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="bg-[#232329] rounded-lg w-[50px] h-[50px] flex justify-center items-center group">
														<div className="text-2xl group-hover:text-white transition-all duration-300 ease-in-out">{dt.icon}</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className="capitalize">{dt.name}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									))}
								</ul>
								<div className="border border-white/20"></div>
								<div className="flex items-center gap-4">
									<Link href={project.link} target="_blank">
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Visit project</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
									<Link href={project.github} target="_blank">
										<TooltipProvider delayDuration={100}>
											<Tooltip>
												<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
													<BsGithub className="text-white text-3xl group-hover:text-accent" />
												</TooltipTrigger>
												<TooltipContent>
													<p>Github repository</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</Link>
								</div>
							</div>
						</div>
						<div className="w-full xl:w-[50%]">
							<Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
								{projects.map((dt: projectProps, index: number) => (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											<div className="relative w-full h-full">
												<Image src={dt.image} alt="project-thumbnail" fill className="object-cover" />
											</div>
										</div>
									</SwiperSlide>
								))}
								<WorkSliderBtn
									containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
									btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500 easeInOut rounded-xl"
								/>
							</Swiper>
						</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Work;
