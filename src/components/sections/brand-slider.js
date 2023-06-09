import * as React from "react";
import Slider from "react-infinite-logo-slider";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import useWindowSize from "../../hooks/useWindowSize";

export default function BrandSlider() {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "brands" } }) {
				nodes {
					childImageSharp {
						gatsbyImageData(width: 220, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
					}
				}
			}
		}
	`);

	const size = useWindowSize();
	const viewWidth = size.width <= 768 ? "250px" : "400px";

	return (
		<section className='pt-10 md:pt-20 brand-slider'>
			<div className='container'>
				<Slider width={viewWidth} duration={20} pauseOnHover={false} blurBorders={false} blurBoderColor={"#fff"}>
					{data.allFile.nodes.map((element, index) => {
						return (
							<Slider.Slide key={index}>
								<GatsbyImage image={element.childImageSharp.gatsbyImageData} alt={""} />
							</Slider.Slide>
						);
					})}
				</Slider>
				<hr className='container mt-10 md:mt-20 bg-[#DFDFDF]' />
			</div>
		</section>
	);
}
