import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ProfilePic from "../../../public/profile-picture(2).png";

function about() {
	return (
		<>
			<Head>
				<title>Portofolio. | About Page</title>
				<meta name="description" content="any description" />
			</Head>
			<main className="flex w-full flex-col items-center justify-center">
				<Layout className="pt-16">
					<AnimatedText text={"Website Enthusiast, Develop & Design"} className="mb-16" />
					<div className="grid w-full grid-cols-8 gap-16">
						<div className="col-span-3 flex flex-col items-start justify-start">
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
							<p className="font-medium">A website developer enthusiast with a passion for designing (Frontend) and has basic skills on backend. Began my programming journey by finishing as Information System at Multimedia Nusantara University and Hacktiv8 Bootcamp as a Full Stack Javascript Web Developer, having decided to leave my previous career in the manufacturing industry as System Analyst Internship to pursue what has been a lifelong passion in Website Developing.</p>
						</div>
						<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
							<Image src={ProfilePic} alt="Vincentius Clarishn" className="w-full h-auto rounded-xl" />
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}

export default about;
