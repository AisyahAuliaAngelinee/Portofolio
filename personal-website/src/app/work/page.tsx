"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiSequelize, SiPostgresql, SiTypescript } from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";
import { TbBrandThreejs } from "react-icons/tb";

interface stackProps {
	icon: any;
	name: string;
}

const projects = [
	{
		num: "01",
		category: "frontend",
		title: "Portofolio Website",
		description:
			"My portfolio website introduces myself and showcases the web projects I have completed, along with my skills in web programming. It also highlights the educational background and training I have undergone before starting my career.",
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
		link: "",
		github: "",
	},
	{
		num: "02",
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
		image: "/assets/work/thumb2.png",
		link: "https://3-d-product-base.vercel.app/",
		github: "https://github.com/AisyahAuliaAngelinee/3D-Shirt-Customizer",
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
