import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { detailsData } from "../../data/details/details-data";
import { Pin } from "../elements/icons";

export default function Hero() {
	return (
		<section className='details'>
			<div className='container'>
			<div className='gradient-5' />
				<div className='details-section-bg'>
					<StaticImage
						className='w-full h-full'
						placeholder='none'
						quality={100}
						alt=''
						src={"../../images/sections/details/details-bg-image.png"}
					/>
				</div>
				<div className='flex flex-wrap content'>
					<div className='basis-full lg:basis-9/12'>
						<h2 className='mb-8 heading-xl'>{detailsData.title}</h2>
						<p className='text-xl mb-[50px] sm:mb-[70px]'>{detailsData.subtitle}</p>
						<div className='flex items-center space-x-4 md:space-x-6 mb-[50px] sm:mb-[60px]'>
							<div className='w-10 h-10'>
								<Pin />
							</div>
							<div>
								<a href={detailsData.link} className='map-link' target='_blank' rel='noreferrer'>
									<address className='flex items-center address' dangerouslySetInnerHTML={{ __html: detailsData.address }} />
								</a>
							</div>
						</div>
						{/* <p className='text'>{detailsData.text}</p> */}
					</div>
				</div>
			</div>
		</section>
	);
}
