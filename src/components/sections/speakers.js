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
						gatsbyImageData(layout: CONSTRAINED, width: 300, height: 300, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
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
				<svg className='gradient-3' width='1936' height='2291' viewBox='0 0 1936 2291' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.7'>
						<g filter='url(#filter0_f_370_134)'>
							<ellipse cx='967.878' cy='1287.24' rx='502.915' ry='467.878' transform='rotate(90 967.878 1287.24)' fill='#FF5202' />
						</g>
						<g filter='url(#filter1_f_370_134)'>
							<ellipse cx='1046.03' cy='849.941' rx='349.941' ry='326.026' transform='rotate(90 1046.03 849.941)' fill='#27E5F1' />
						</g>
					</g>
					<defs>
						<filter
							id='filter0_f_370_134'
							x='0'
							y='284.322'
							width='1935.76'
							height='2005.83'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_370_134' />
						</filter>
						<filter
							id='filter1_f_370_134'
							x='220'
							y='3.05176e-05'
							width='1652.05'
							height='1699.88'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_370_134' />
						</filter>
					</defs>
				</svg>

				<svg className='gradient-4' width='1750' height='2156' viewBox='0 0 1750 2156' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.7'>
						<g filter='url(#filter0_f_371_147)'>
							<ellipse cx='813.591' cy='1185.56' rx='470.443' ry='313.591' transform='rotate(90 813.591 1185.56)' fill='#FF5202' />
						</g>
						<g filter='url(#filter1_f_371_147)'>
							<ellipse cx='1031.48' cy='827.346' rx='327.346' ry='218.516' transform='rotate(90 1031.48 827.346)' fill='#27E5F1' />
						</g>
					</g>
					<defs>
						<filter
							id='filter0_f_371_147'
							x='0'
							y='215.113'
							width='1627.18'
							height='1940.89'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_371_147' />
						</filter>
						<filter
							id='filter1_f_371_147'
							x='312.968'
							y='0'
							width='1437.03'
							height='1654.69'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_371_147' />
						</filter>
					</defs>
				</svg>

				<svg className='gradient-5' width='1936' height='2291' viewBox='0 0 1936 2291' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.7'>
						<g filter='url(#filter0_f_370_134)'>
							<ellipse cx='967.878' cy='1287.24' rx='502.915' ry='467.878' transform='rotate(90 967.878 1287.24)' fill='#FF5202' />
						</g>
						<g filter='url(#filter1_f_370_134)'>
							<ellipse cx='1046.03' cy='849.941' rx='349.941' ry='326.026' transform='rotate(90 1046.03 849.941)' fill='#27E5F1' />
						</g>
					</g>
					<defs>
						<filter
							id='filter0_f_370_134'
							x='0'
							y='284.322'
							width='1935.76'
							height='2005.83'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_370_134' />
						</filter>
						<filter
							id='filter1_f_370_134'
							x='220'
							y='3.05176e-05'
							width='1652.05'
							height='1699.88'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_370_134' />
						</filter>
					</defs>
				</svg>

				<svg className='gradient-6' width='1750' height='2156' viewBox='0 0 1750 2156' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.7'>
						<g filter='url(#filter0_f_371_147)'>
							<ellipse cx='813.591' cy='1185.56' rx='470.443' ry='313.591' transform='rotate(90 813.591 1185.56)' fill='#FF5202' />
						</g>
						<g filter='url(#filter1_f_371_147)'>
							<ellipse cx='1031.48' cy='827.346' rx='327.346' ry='218.516' transform='rotate(90 1031.48 827.346)' fill='#27E5F1' />
						</g>
					</g>
					<defs>
						<filter
							id='filter0_f_371_147'
							x='0'
							y='215.113'
							width='1627.18'
							height='1940.89'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_371_147' />
						</filter>
						<filter
							id='filter1_f_371_147'
							x='312.968'
							y='0'
							width='1437.03'
							height='1654.69'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_371_147' />
						</filter>
					</defs>
				</svg>

				<svg className='gradient-7' width='1936' height='2291' viewBox='0 0 1936 2291' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.7'>
						<g filter='url(#filter0_f_370_134)'>
							<ellipse cx='967.878' cy='1287.24' rx='502.915' ry='467.878' transform='rotate(90 967.878 1287.24)' fill='#FF5202' />
						</g>
						<g filter='url(#filter1_f_370_134)'>
							<ellipse cx='1046.03' cy='849.941' rx='349.941' ry='326.026' transform='rotate(90 1046.03 849.941)' fill='#27E5F1' />
						</g>
					</g>
					<defs>
						<filter
							id='filter0_f_370_134'
							x='0'
							y='284.322'
							width='1935.76'
							height='2005.83'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_370_134' />
						</filter>
						<filter
							id='filter1_f_370_134'
							x='220'
							y='3.05176e-05'
							width='1652.05'
							height='1699.88'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_370_134' />
						</filter>
					</defs>
				</svg>

				<svg className="gradient-8" width='3124' height='2613' viewBox='0 0 3124 2613' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.5'>
						<g filter='url(#filter0_f_371_153)'>
							<ellipse cx='2224.21' cy='908.07' rx='444.834' ry='485.305' transform='rotate(-0.355708 2224.21 908.07)' fill='#A499F8' />
						</g>
						<g filter='url(#filter1_f_371_153)'>
							<ellipse cx='697.84' cy='1630.99' rx='378.9' ry='379.441' transform='rotate(-34.8933 697.84 1630.99)' fill='#FF2A00' />
						</g>
					</g>
					<defs>
						<filter
							id='filter0_f_371_153'
							x='1461.64'
							y='105.029'
							width='1525.15'
							height='1606.08'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='158.868' result='effect1_foregroundBlur_371_153' />
						</filter>
						<filter
							id='filter1_f_371_153'
							x='0.9935'
							y='933.953'
							width='1393.69'
							height='1394.07'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='158.868' result='effect1_foregroundBlur_371_153' />
						</filter>
					</defs>
				</svg>

				<div className='flex justify-center mb-[32px] md:mb-[70px]'>
					<h2 className='heading-xl'>{speakersData.title}</h2>
				</div>

				<div className={`three-col-grid mb-[40px] sm:mb-0`}>
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

				<div className='flex justify-center mt-1'>
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
