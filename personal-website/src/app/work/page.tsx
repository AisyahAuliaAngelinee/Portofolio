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
	return (
		<>
			<div>work page</div>
		</>
	);
};

export default Work;
