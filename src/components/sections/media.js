import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Media() {
	return (
		<section id="partners" className='partners'>
			<div className='container'>
				<div className='flex flex-col items-center sponsors-list'>
					<h2 className='mb-[60px] heading-xl text-center'>Media Partners</h2>
					<div className='max-w-[150px] sm:max-w-[450px] md:max-w-[674px] space-y-6'>
						<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[110px] md:w-[200px]'
									src='../../images/sections/partners/media/coindesk.png'
									placeholder='none'
									quality={100}
									alt='Coindesk'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[80px] md:w-[90px]'
									src='../../images/sections/partners/media/zk.png'
									placeholder='none'
									quality={100}
									alt='ZK Podcast'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[110px] md:w-[200px]'
									src='../../images/sections/partners/media/modular-media.svg'
									placeholder='none'
									quality={100}
									alt='Modular Media'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
