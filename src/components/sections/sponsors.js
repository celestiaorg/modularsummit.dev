import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Sponsors() {
	return (
		<section className='sponsors'>
			<div className='container'>
				<div className='gradient-1' />
				<div className='gradient-2' />
				<div className='flex flex-col items-center sponsors-list'>
					<h2 className='mb-[60px] heading-xl'>Sponsors</h2>
					<StaticImage
						className='w-[230px] md:w-[300px] mb-8 md:mb-8 '
						src='../../images/sections/sponsors/anoma.png'
						placeholder='none'
						alt='Anoma'
						quality={100}
					/>

					<div className='flex flex-col items-center justify-center mb-20 md:mb-[80px] max-md:space-y-12 md:space-x-16 md:flex-row'>
						<div className='flex items-center basis-auto'>
							<StaticImage
								className='w-[200px] md:w-[230px]'
								src='../../images/sections/sponsors/celestia-labs.png'
								placeholder='none'
								quality={100}
								alt='Hyperlane'
							/>
						</div>
						<div className='flex items-center basis-auto'>
							<StaticImage
								className='w-[180px] md:w-[230px]'
								src='../../images/sections/sponsors/maven11.png'
								placeholder='none'
								quality={100}
								alt='Risc Zero'
							/>
						</div>
					</div>
					<div className='max-w-[150px] sm:max-w-[450px] md:max-w-[674px] space-y-8 md:space-y-6 mb-20 md:mb-[80px]'>
						<div className='flex flex-col items-center justify-center max-md:space-y-8 md:space-x-16 md:flex-row'>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[150px] md:w-[234px]'
									src='../../images/sections/sponsors/espresso.png'
									placeholder='none'
									quality={100}
									alt='Espresso'
								/>
							</div>
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
									className='w-[110px] md:w-[110px]'
									src='../../images/sections/sponsors/lagrange.png'
									placeholder='none'
									quality={100}
									alt='Espresso'
								/>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
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
									className='w-[150px] md:w-[230px]'
									src='../../images/sections/sponsors/mantle.png'
									placeholder='none'
									quality={100}
									alt='Risc Zero'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[150px] md:w-[216px]'
									src='../../images/sections/sponsors/spartan.png'
									placeholder='none'
									quality={100}
									alt='Spartan'
								/>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center max-md:space-y-6 md:space-x-16 md:flex-row'>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[150px] md:w-[210px]'
									src='../../images/sections/sponsors/signature.png'
									placeholder='none'
									quality={100}
									alt='Signature'
								/>
							</div>
							<div className='flex items-center basis-auto'>
								<StaticImage
									className='w-[140px] md:w-[180px]'
									src='../../images/sections/sponsors/astria.png'
									placeholder='none'
									quality={100}
									alt='Avail'
								/>
							</div>
						</div>
					</div>
					<div className='max-w-[150px] sm:max-w-[450px] md:max-w-[674px] space-y-4 md:space-y-6'>
						<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
							<StaticImage
								className='w-[170px] md:w-[220px]'
								src='../../images/sections/sponsors/foresight.png'
								placeholder='none'
								quality={100}
								alt='Lambda Class'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
