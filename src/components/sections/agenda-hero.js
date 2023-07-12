import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../elements/button";

import celestiaLabs from "../../images/celestia-lab.svg";
import mavenEleven from "../../images/maven11.svg";

export default function AgendaHeader({ data }) {
	return (
		<section id='agenda-hero' className='agenda-hero'>
			<div className='container'>
				<div className='details-section-bg'>
					<StaticImage
						className='w-full h-full'
						placeholder='none'
						quality={100}
						alt=''
						src={"../../images/sections/footer/footer-bg-image.png"}
					/>
				</div>
				<div className='flex flex-wrap content'>
					<div className='basis-full lg:basis-9/12'>
						<h1 className='mb-6 lg:mb-5 heading-xxl xs:mb-8 sm:mb-10'>{data.title}</h1>
						<p className='text-xl max-w-[525px] mb-2'>{data.subtitle}</p>

						<div className={"flex items-center mb-10 xs:mb-12 md:mb-16 lg:mb-5"}>
							<div className={"basis-auto text-[12px] font-medium"}>hosted by</div>
							<div className={"basis-auto pl-4"}>
								<img src={celestiaLabs} className={"h-[25px]"} alt='' />
							</div>
							<div className={"basis-auto px-4"}>·</div>
							<div className={"basis-auto"}>
								<img src={mavenEleven} className={"md:h-[15px]"} alt='' />
							</div>
						</div>

						<div className='flex flex-wrap items-center'>
							<div className='basis-full md:basis-auto'>
								<StaticImage
									className='w-[89px] h-full mr-4'
									placeholder='none'
									quality={100}
									alt=''
									src={"../../images/sections/agenda/zktrack.png"}
								/>
							</div>
							<div className='basis-full md:basis-1/2'>{data.zkText}</div>
						</div>
						<div className='basis-full lg:basis-1/2'></div>
						<div className='basis-full lg:basis-1/2'>
							<p className='text'>{data.text}</p>
							<div className='flex items-center space-x-8'>
								<div className='basis-auto'>
									<div className='date'>{data.date}</div>
								</div>
								<div className='basis-auto'>
									<Button
										class={data.buttons.class}
										type={data.buttons.type}
										text={data.buttons.text}
										url={data.buttons.url}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr className='border-#DFDFDF] my-[50px] sm:w-1/2 w-full' />
			</div>
		</section>
	);
}
