import React, { useState } from "react";
import { speakersData } from "../../data/speakers/speakers-data";
import { Button } from "../elements/button";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Speakers() {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "speakers" } }) {
				nodes {
					childImageSharp {
						fluid {
							originalName
						}
						gatsbyImageData(width: 300, height: 300, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
					}
				}
			}
		}
	`);

	console.log(speakersData.buttons.class);
	return (
		<section className='speakers'>
			<div className='container'>
				<div className='flex justify-center mb-[32px] md:mb-[70px]'>
					<h2 className='heading-xl'>{speakersData.title}</h2>
				</div>
				{/* <div className='flex justify-center'>
					<div className="coming-soon">
						<span className='filter animate' />
						<h2 className='heading-lg'>Coming soon</h2>
					</div>
				</div> */}
				<div className={`three-col-grid speakers-collapsed ${open && 'speakers-open'}`}>
					{speakersData.speakers.map((item, index) => {
						const speakersImage = data.allFile.nodes.find((element) => element.childImageSharp.fluid.originalName === item.image);
						return (
							<div key={index} className='flex flex-col items-center'>
								<GatsbyImage className='speaker-image' image={speakersImage.childImageSharp.gatsbyImageData} alt={item.name} />
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
						text={open ? speakersData.buttons.text.close : speakersData.buttons.text.open}
						onClick={handleClick}
					/>
				</div>
			</div>
		</section>
	);
}
