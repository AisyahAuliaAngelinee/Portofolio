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
							<form>form</form>
						</div>
						<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">info</div>
					</div>
				</div>
			</motion.section>
		</>
	);
};

export default Contact;
