import { Thumb1, Thumb2, Thumb3 } from "@/assets";
import { BsFillInboxesFill } from "react-icons/bs";
import { FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
	SiNextdotjs,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";

export const projects = [
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
		link: "https://vclrshna-portofolio.vercel.app/",
		github: "https://github.com/AisyahAuliaAngelinee/Portofolio",
	},
	{
		num: "03",
		category: "frontend",
		title: "Brrads Industries",
		description:
			"Brrads Industries is a merchandise brand offering a range of fashion products including apparel and accessories with modern, high-quality designs. Managed by Reza Auditore, an Indonesian streamer, Brrads Industries represents a dynamic, creative, and authentic community identity.",
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
				icon: <SiTypescript />,
				name: "typescript",
			},
			{ icon: <BsFillInboxesFill />, name: "Zustand" },
		],
		image: Thumb3,
		link: "https://bradds-industries.vercel.app/",
		github: "https://github.com/AisyahAuliaAngelinee/bradds-industries",
	},
];
