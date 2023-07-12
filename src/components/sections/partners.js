import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Sponsors() {
	return (
		<section id="partners" className='partners'>
			<div className='container'>
				<div className='flex flex-col items-center sponsors-list'>
					<h2 className='mb-[60px] heading-xl'>Partners</h2>
					<div className='max-w-[150px] sm:max-w-[450px] md:max-w-[674px] space-y-6'>
						<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[80px] md:w-[90px]'
									src='../../images/sections/partners/argus.png'
									placeholder='none'
									quality={100}
									alt='Hyperlane'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[70px] md:w-[80px]'
									src='../../images/sections/partners/flashbot.png'
									placeholder='none'
									quality={100}
									alt='Risc Zero'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[50px] md:w-[65px]'
									src='../../images/sections/partners/zkpodcast.png'
									placeholder='none'
									quality={100}
									alt='Espresso'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[120px] md:w-[133px]'
									src='../../images/sections/partners/ledger.png'
									placeholder='none'
									quality={100}
									alt='Espresso'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
