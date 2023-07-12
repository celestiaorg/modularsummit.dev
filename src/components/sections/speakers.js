import React, { useState } from "react";
import { speakersData } from "../../data/speakers/speakers-data";
import { Button } from "../elements/button";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Speakers() {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow((show) => {
			setTimeout(() => {
				if (show === true) {
					const targetSection = document.getElementById("speakers");
					const offsetY = 0; // Adjust this value based on the height of your header or navigation bar.
					const elementPosition = targetSection.getBoundingClientRect().top;
					const offsetPosition = elementPosition + window.pageYOffset + offsetY;

					window.scrollTo({ top: offsetPosition, behavior: "smooth" });
				}
			}, 600);
			return !show;
		});
	};

	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "speakers" } }) {
				nodes {
					childImageSharp {
						gatsbyImageData(layout:CONSTRAINED, width: 300, height: 300, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
					}
					name
				}
			}
		}
	`);

	// console.log(speakersData.speakers.featured);
	return (
		<section id='speakers' className='speakers'>
			<div className='container'>
				<div className='gradient-3' />
				<div className='gradient-4' />
				<div className='gradient-6' />
				<div className='flex justify-center mb-[32px] md:mb-[70px]'>
					<h2 className='heading-xl'>{speakersData.title}</h2>
				</div>

				<div className={`three-col-grid mb-[40px] sm:mb-[90px]`}>
					{speakersData?.speakers.featured.map((item, index) => {
						const speakersImage = data.allFile.nodes.find((element) => element.name === item.image);
						return (
							<div key={index} className='flex flex-col items-center'>
								<GatsbyImage
									imgStyle={{ borderRadius: "100%" }}
									className='speaker-image'
									image={speakersImage?.childImageSharp.gatsbyImageData}
									alt={item.alt}
								/>
								<h3 className='heading-lg'>{item.name}</h3>
								<p className='speaker-title'>{item.title}</p>
								<p className='speaker-company'>{item.company}</p>
							</div>
						);
					})}
				</div>

				<div className={`three-col-grid ${show ? "show-rest" : "hide-rest"}`}>
					{speakersData?.speakers.rest.map((item, index) => {
						const speakersImage = data.allFile.nodes.find((element) => element.name === item.image);
						return (
							<div key={index} className='flex flex-col items-center'>
								<GatsbyImage
									imgStyle={{ borderRadius: "100%" }}
									className='speaker-image'
									image={speakersImage?.childImageSharp.gatsbyImageData}
									alt={item.name}
								/>
								<h3 className='heading-lg'>{item.name}</h3>
								<p className='speaker-title'>{item.title}</p>
								<p className='speaker-company'>{item.company}</p>
							</div>
						);
					})}
				</div>

				<div className='flex justify-center mt-10'>
					<Button
						class={speakersData.buttons.class}
						type={speakersData.buttons.type}
						text={show ? speakersData.buttons.text.hide : speakersData.buttons.text.show}
						onClick={handleClick}
					/>
				</div>
			</div>
		</section>
	);
}
