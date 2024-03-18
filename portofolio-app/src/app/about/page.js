import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

function about() {
	return (
		<>
			<Head>
				<title>Portofolio. | About Page</title>
				<meta name="description" content="any description" />
			</Head>
			<main className="flex w-full flex-col items-center justify-center">
				<Layout className="pt-16">
					<AnimatedText text={"Website Enthusiast, Develop & Design"} />
					<div className="grid w-full grid-cols-8 gap-16">
						<div className="col-span-3 flex flex-col items-start justify-start">
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
							<p></p>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
}

export default about;
