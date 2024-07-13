"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
	{
		id: 1,
		num: "01",
		title: "Web Developement",
		description:
			"A web developer must be proficient in various programming languages such as HTML, CSS, and JavaScript, as well as understanding responsiveness and accessibility to create attractive and functional websites",
		href: "",
	},
	{
		id: 2,
		num: "02",
		title: "Frontend Development",
		description:
			"Frontend development focuses on creating the visual and interactive elements of a website, ensuring that the user interface is both aesthetically pleasing and user-friendly",
		href: "",
	},
	{
		id: 3,
		num: "03",
		title: "Fullstack Development",
		description:
			"A fullstack developer must possess a wide range of skills, including proficiency in frontend technologies like HTML, CSS, and JavaScript, as well as backend technologies such as Express.js with Node.js, ORM Sequelize, and PostgreSQL database, to create seamless and fully functional web applications",
		href: "",
	},
];

interface serviceProps {
	id: number;
	num: string;
	title: string;
	description: string;
	href: string;
}

function Services() {
	return (
		<>
			<section className="min-h-[80dvh] flex flex-col justify-center py-12 xl:py-0">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								delay: 2.4,
								duration: 0.4,
								ease: "easeIn",
							},
						}}
						className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
						{services.map((item: serviceProps) => (
							<div key={item.id} className="flex-1 flex flex-col gap-6 justify-center group">
								<div className="w-full flex justify-between items-center">
									<div className="text-5xl font-extrabold">{item.num}</div>
									<Link href={item.href}>
										<BsArrowDownRight />
									</Link>
								</div>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<div className="border-b border-white/20 w-full"></div>
							</div>
						))}
					</motion.div>
				</div>
			</section>
		</>
	);
}

export default Services;
