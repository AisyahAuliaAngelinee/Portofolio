import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
	return (
		<>
			<section className="h-full">
				<div className="container mx-auto h-full">
					<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
						{/* text */}
						<div className="text-center xl:text-left">
							<span className="text-xl">Frontend Developer</span>
							<h1 className="h1 mb-6">
								Hello I'm <br />
								<span className="text-accent">Vincentius Clarishna</span>
							</h1>
							<p className="max-w-[500px] mb-9 text-white/80">
								I excel in creating elegant digital experiences with stunning design and cutting-edge technology, proficient in multiple programming languages to deliver innovative
								solutions and optimal user experiences
							</p>

							{/* btn and socials */}
							<div>
								<Button variant={"outline"} size={"lg"} className="flex uppercase items-center gap-2">
									<span>Download CV</span>
									<FiDownload className="text-xl" />
								</Button>
							</div>
						</div>

						{/* photo */}
						<div>photo</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
