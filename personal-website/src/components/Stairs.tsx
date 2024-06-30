import { motion } from "framer-motion";

// variants
const stairAnimation = {
	initial: {
		top: "0%",
	},
	animate: {
		top: "100%",
	},
	exit: {
		top: ["100%", "0%"],
	},
};

// calculate reversed index for delay
const reverseIndex = (index: number) => {
	const totalSteps = 6; // total steps
	return totalSteps - index - 1;
};

const Stairs = () => {
	return (
		<>
			{/**
			 * Render div motion, difined by stariAnimation and has 6 div that will be animated
			 * delay for each div will be dynamically based on it's reversed index
			 */}
			{[...Array(6)].map((_, index: number) => {
				return (
					<>
						<motion.div
							key={index}
							variants={stairAnimation}
							initial="initial"
							animate="animate"
							exit={"exit"}
							transition={{
								duration: 0.4,
								ease: "easeInOut",
								delay: reverseIndex(index) * 0.1,
							}}
							className="h-full w-full bg-white relative"
						/>
					</>
				);
			})}
		</>
	);
};

export default Stairs;
