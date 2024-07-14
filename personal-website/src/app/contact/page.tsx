"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectItem, SelectLabel, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface infoProps {
	icon: any;
	title: string;
	description: string;
}

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "(+62) 813 9999 9650",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "vincentius.clarishna@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Kota Deltamas, Cikarang Pusat - 17531 Kab. Bekasi",
	},
];

const Contact = () => {
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
				className="py-6">
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row gap-[30px]">
						<div className="xl:h-[54%] order-2 xl:order-none">
							<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
								<h3 className="text-4xl text-accent">Let's work together</h3>
								<p className="text-white/60">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. I used a brief "Lorem ipsum" placeholder for the "Let's Work Together" section because I haven't found
									the right description yet. This is temporary until I come up with a more fitting description.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<Input type="firstname" placeholder="Firstname" />
									<Input type="lastname" placeholder="Lastname" />
									<Input type="email" placeholder="Email address" />
									<Input type="phone" placeholder="Phone number" />
								</div>
								<Select>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select a service" />
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Select a service</SelectLabel>
												<SelectItem value="fsd">Fullstack Developer</SelectItem>
												<SelectItem value="fed">Frontend Developer</SelectItem>
												<SelectItem value="wdev">Website Developer</SelectItem>
												<SelectItem value="mdev">Mobile Developer</SelectItem>
											</SelectGroup>
										</SelectContent>
									</SelectTrigger>
								</Select>
								<Textarea className="h-[200px]" placeholder="Type your message here..." />
								<Button size={"md"} className="max-w-40">
									Send Message
								</Button>
							</form>
						</div>
						<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
							<ul className="flex flex-col gap-10">
								{info.map((dt: infoProps, index: number) => (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{dt.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{dt.title}</p>
											<h3 className="text-xl">{dt.description}</h3>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Contact;
