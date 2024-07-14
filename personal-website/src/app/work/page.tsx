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
	image: string;
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
		image: "/assets/work/thumb1.png",
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
		image: "/assets/work/thumb2.png",
		link: "",
		github: "",
	},
];

const Work = () => {
	const [project, setProject] = useState<projectProps>(projects[0]);

	return (
		<>
			<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[80dvh] flex flex-col justify-center py-12 xl:py-0">
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row xl:gap-[30px]">
						<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
							<div>
								<div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
								<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ease-in-out capitalize">
									{project.category} project
								</h2>
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
							</div>
						</div>
						<div className="w-full xl:w-[50%]">slider</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Work;
