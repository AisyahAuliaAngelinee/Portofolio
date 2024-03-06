import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/profile-picture(1).png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<main className="flex items-center text-dark w-full min-h-screen">
				<Layout className="pt-0">
					<div className="flex items-center justify-between w-full">
						<div className="w-1/2">
							<Image src={profilePic} alt="Vincentius Clarishna" className="w-full h-auto" />
						</div>
						<div className="w-1/2 flex flex-col items-center self-center">
							<AnimatedText text="Web Enthusiast, Design and Code!" className="!text-6xl text-left" />
							<p className="my-4 text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js, Next.js and web development.</p>
							<div>
								<Link href={"/CV-Vincentius Clarishna-Full Version.pdf"}></Link>
							</div>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}
