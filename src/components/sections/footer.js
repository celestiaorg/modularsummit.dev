import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Pin } from "../elements/icons";
import { footerData } from "../../data/footer/footer-data";
import { Button } from "../elements/button";
import { Twitter } from "../elements/icons.js";

export default function Hero() {
	return (
		<section id="venue" className='footer'>
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
						<h2 className='mb-8 heading-xl'>{footerData.title}</h2>
						<p className='text-xl mb-[50px] sm:mb-[70px]'>{footerData.subtitle}</p>
						<div className='flex items-center space-x-4 md:space-x-6 mb-[50px] sm:mb-[60px]'>
							<div className='w-10 h-10'>
								<Pin />
							</div>
							<div>
								<a href={footerData.link} className='map-link' target='_blank' rel='noreferrer'>
									<address className='flex items-center address' dangerouslySetInnerHTML={{ __html: footerData.address }} />
								</a>
							</div>
						</div>
						<p className='text'>{footerData.text}</p>
					</div>
				</div>
				<hr className='border-#DFDFDF] my-[50px] sm:w-1/2 w-full' />
				<div className="flex items-center space-x-8">
					<div className='basis-auto'>
						<Button
							class={"button primary small"}
							type={footerData.button.type}
							text={"Apply to speak"}
							url={"https://celestia-intake.typeform.com/to/WYRfdoL4"}
						/>
					</div>
					<div className='basis-auto'>
						<a className='icon' href={footerData.social.twitter} target='_blank' rel='noreferrer noopener'>
							<Twitter />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
