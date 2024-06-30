"use client";

import { ProfilePict } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
	return (
		<>
			<div className="w-full h-full relative">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 2,
							duration: 0.4,
							ease: "easeInOut",
						},
					}}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								delay: 2.4,
								duration: 0.4,
								ease: "easeInOut",
							},
						}}
						className="w-[298px] h-[298px] xl:w-[430px] xl:h-[430px] mix-blend-lighten">
						<Image src={ProfilePict} alt="profile-picture" priority quality={100} fill className="object-contain" />
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Photo;
