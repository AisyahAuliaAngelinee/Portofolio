import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/profile-picture(1).png";

export default function Home() {
	return (
		<>
			<main className="flex items-center text-dark w-full min-h-screen">
				<Layout>
					<div className="flex items-center justify-between w-full">
						<div>
							<Image src={profilePic} alt="Vincentius Clarishna" className="w-full h-auto" />
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}
