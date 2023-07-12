import * as React from "react";
import { Pin } from "../elements/icons";
import { footerData } from "../../data/footer/footer-data";
import { Button } from "../elements/button";
import { Twitter } from "../elements/icons.js";

export default function AgendaFooter() {
	return (
		<section id='venue' className='agenda-footer'>
			<div className='container'>
				<h2 className='mb-[40px] heading-xl'>{footerData.title}</h2>
				<div className='flex flex-wrap content'>
					<div className='basis-full md:basis-1/2 md:pr-[50px]'>
						<div className='flex items-center space-x-3 md:space-x-4 mb-[40px]'>
							<div className='w-8 h-8'>
								<Pin />
							</div>
							<div>
								<a href={footerData.link} className='map-link' target='_blank' rel='noreferrer'>
									<address className='flex items-center address' dangerouslySetInnerHTML={{ __html: footerData.address }} />
								</a>
							</div>
						</div>
						<p className='text-xl mb-[50px] sm:mb-0'>{footerData.subtitle}</p>
					</div>

					<div className='basis-full md:basis-1/2 md:pl-[50px] md:pt-[75px]'>
						<p className='text'>{footerData.text}</p>
					</div>
				</div>

				<hr className='border-#DFDFDF] my-[50px] sm:w-1/2 w-full' />
				<div className='flex items-center space-x-8'>
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
