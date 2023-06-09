import * as React from "react";
import { Button } from "../../components/elements/button";
import { StaticImage } from "gatsby-plugin-image";
import { heroData } from "../../data/home/hero-data";

export default function Hero() {
	return (
		<section className='hero'>
			<div className='container relative'>
				<div className='hero-section-bg'>
					<StaticImage
						className='w-full h-full'
						placeholder='none'
						quality={100}
						alt=''
						src={"../../images/sections/hero/modular-summit-hero-bg.png"}
					/>
				</div>
				<div className='flex flex-wrap'>
					<div className='basis-full lg:basis-1/2'>
						<h1 className='mb-6 lg:mb-5 heading-xxl xs:mb-8 sm:mb-10'>{heroData.title}</h1>
						<p className='text-xl max-w-[525px] mb-10 xs:mb-12 md:mb-16 lg:mb-5'>{heroData.subtitle}</p>
					</div>
					<div className='basis-full lg:basis-1/2'>
						<p className='text'>{heroData.text}</p>
						<div className='date'>
							{heroData.date}
						</div>
						<div className='flex flex-wrap gap-4'>
							{heroData.buttons.map((button, index) => (
								<Button key={index} class={button.class} type={button.type} text={button.text} url={button.url} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
