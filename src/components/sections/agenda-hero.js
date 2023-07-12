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
						src={"../../images/sections/agenda/agenda-hero-image.png"}
					/>
				</div>
				<div className='flex flex-wrap content'>
					<div className='basis-full lg:basis-9/12'>
						<div className="title-label">MODULAR SUMMIT</div>
						<h1 className='mb-8 md:mb-10 heading-xxl'>{data.title}</h1>
						<p className='text-xl max-w-[525px] mb-4 md:mb-6'>{data.subtitle}</p>

						<div className={"flex items-center mb-12 md:mb-14"}>
							<div className={"basis-auto text-[12px] font-medium"}>hosted by</div>
							<div className={"basis-auto pl-4"}>
								<img src={celestiaLabs} className={"h-[24px]"} alt='' />
							</div>
							<div className={"basis-auto px-4"}>·</div>
							<div className={"basis-auto"}>
								<img src={mavenEleven} className={"md:h-[14px]"} alt='' />
							</div>
						</div>

						<div className='flex flex-wrap items-center'>
							<div className='basis-full md:basis-auto'>
								<StaticImage
									className='w-[72px] md:w-[89px] h-full mr-4'
									placeholder='none'
									quality={100}
									alt=''
									src={"../../images/sections/agenda/zktrack.png"}
								/>
							</div>
							<div className='zk-track basis-full md:basis-1/2'>{data.zkText}</div>
						</div>
						<div className='basis-full lg:basis-1/2'></div>
						<div className='basis-full lg:basis-1/2'>
							<p className='text'>{data.text}</p>
							<div className='flex flex-col sm:items-center sm:flex-row'>
								<div className='mr-8 basis-auto'>
									<div className='date'>{data.date}</div>
								</div>
								<div className='max-sm:mt-4 basis-auto'>
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
			</div>
		</section>
	);
}
