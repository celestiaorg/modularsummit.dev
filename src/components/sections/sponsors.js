import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Sponsors() {
	return (
		<section id='sponsors' className='sponsors'>
			<div className='container'>
				<svg className='gradient-1' width='1935' height='1910' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='1'>
						<g filter='url(#a)'>
							<circle cx='1054.47' cy='1029.51' r='380.49' fill='#FF5202' />
						</g>
						<g filter='url(#b)'>
							<ellipse cx='764.755' cy='765.133' rx='264.755' ry='265.133' fill='#27E5F1' />
						</g>
					</g>
					<defs>
						<filter
							id='a'
							x='173.982'
							y='149.019'
							width='1760.98'
							height='1760.98'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_367_128' />
						</filter>
						<filter id='b' x='0' y='0' width='1529.51' height='1530.27' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='250' result='effect1_foregroundBlur_367_128' />
						</filter>
					</defs>
				</svg>
				<svg  className="gradient-2" width='1173' height='1894' viewBox='0 0 1173 1894' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g opacity='0.8'>
						<g filter='url(#filter0_f_356_131)'>
							<ellipse cx='586.743' cy='813.354' rx='508.695' ry='241.788' transform='rotate(-105 586.743 813.354)' fill='#FF5202' />
						</g>
						<g filter='url(#filter1_f_356_131)'>
							<ellipse cx='524.735' cy='1230.97' rx='353.963' ry='168.485' transform='rotate(-105 524.735 1230.97)' fill='#27E5F1' />
						</g>
					</g>
					<defs>
						<filter
							id='filter0_f_356_131'
							x='0.855316'
							y='0.232269'
							width='1171.78'
							height='1626.24'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='158.868' result='effect1_foregroundBlur_356_131' />
						</filter>
						<filter
							id='filter1_f_356_131'
							x='20.2069'
							y='568.529'
							width='1009.06'
							height='1324.89'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
							<feGaussianBlur stdDeviation='158.868' result='effect1_foregroundBlur_356_131' />
						</filter>
					</defs>
				</svg>

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
								className='w-[210px] md:w-[230px]'
								src='../../images/sections/sponsors/celestia-labs.png'
								placeholder='none'
								quality={100}
								alt='Hyperlane'
							/>
						</div>
						<div className='flex items-center basis-auto'>
							<StaticImage
								className='w-[190px] md:w-[230px]'
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
					<div className='max-w-[150px] sm:max-w-[450px] md:max-w-[674px] space-y-4 md:space-y-6 mb-14 md:mb-[80px]'>
						<div className='flex flex-col items-center justify-center max-md:space-y-8 md:space-x-16 md:flex-row'>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[120px] md:w-[150px]'
									src='../../images/sections/sponsors/altlayer.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[120px] md:w-[140px]'
									src='../../images/sections/sponsors/galaxy.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[80px] md:w-[100px]'
									src='../../images/sections/sponsors/kr1.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[90px] md:w-[90px]'
									src='../../images/sections/sponsors/modular-cloud.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center max-md:space-y-8 md:space-x-16 md:flex-row'>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[100px] md:w-[120px]'
									src='../../images/sections/sponsors/informal.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[100px] md:w-[120px]'
									src='../../images/sections/sponsors/avail.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[100px] md:w-[120px]'
									src='../../images/sections/sponsors/lambda.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
							<div className='flex flex-col items-center justify-center max-md:space-y-10 md:space-x-16 md:flex-row'>
								<StaticImage
									className='w-[140px] md:w-[150px]'
									src='../../images/sections/sponsors/manta.png'
									placeholder='none'
									quality={100}
									alt='Lambda Class'
								/>
							</div>
						</div>
					</div>

					<div className='flex flex-col items-center justify-center max-md:space-y-5 md:space-x-16 md:flex-row'>
						<div className='flex flex-col items-center justify-center max-md:space-y-8 md:space-x-16 md:flex-row'>
							<StaticImage
								className='w-[170px] md:w-[220px]'
								src='../../images/sections/sponsors/foresight.png'
								placeholder='none'
								quality={100}
								alt='Lambda Class'
							/>
						</div>
						<div className='flex flex-col items-center justify-center max-md:space-y-8 md:space-x-16 md:flex-row'>
							<StaticImage
								className='w-[80px] md:w-[100px]'
								src='../../images/sections/sponsors/qredo.png'
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
