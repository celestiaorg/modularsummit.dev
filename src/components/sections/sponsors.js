import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Sponsors() {
	return (
		<section id="sponsors" className='sponsors'>
			<div className='container'>
				<div className='gradient-1' />
				<div className='gradient-2' />
				<div className='flex flex-col items-center sponsors-list'>
					<h2 className='mb-[60px] heading-xl'>Sponsors</h2>
					<StaticImage
						className='w-[200px] md:w-[260px] mb-16 md:mb-[70px]'
						src='../../images/sections/sponsors/anoma.png'
						placeholder='none'
						alt='Anoma'
						quality={100}
					/>
					<div className='max-w-[150px] sm:max-w-[450px] md:max-w-[674px] space-y-6'>
						<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[150px] md:w-[224px]'
									src='../../images/sections/sponsors/hyperlane.png'
									placeholder='none'
									quality={100}
									alt='Hyperlane'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[65px] md:w-[75px]'
									src='../../images/sections/sponsors/risczero.png'
									placeholder='none'
									quality={100}
									alt='Risc Zero'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[150px] md:w-[234px]'
									src='../../images/sections/sponsors/espresso.png'
									placeholder='none'
									quality={100}
									alt='Espresso'
								/>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[150px] md:w-[216px]'
									src='../../images/sections/sponsors/spartan.png'
									placeholder='none'
									quality={100}
									alt='Spartan'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[150px] md:w-[226px]'
									src='../../images/sections/sponsors/signature.png'
									placeholder='none'
									quality={100}
									alt='Signature'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[100px] md:w-[140px]'
									src='../../images/sections/sponsors/avail.png'
									placeholder='none'
									quality={100}
									alt='Avail'
								/>
							</div>
						</div>

						<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[80px] md:w-[90px]'
									src='../../images/sections/sponsors/modular-cloud.png'
									placeholder='none'
									quality={100}
									alt='Modular Cloud'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[120px] md:w-[140px]'
									src='../../images/sections/sponsors/lambda.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[140px] md:w-[220px]'
									src='../../images/sections/sponsors/altlayer.png'
									placeholder='none'
									quality={100}
									alt='Altlayer'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
