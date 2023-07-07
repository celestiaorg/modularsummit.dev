import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SouverainRadio() {
	return (
		<section className='souverain-radio'>
			<div className='container'>
				<div className='content-wrapper'>
					<StaticImage
						className='self-start lg:self-end mr-0 lg:mr-[10px] w-full md:w-[70%] lg:w-[341px] order-2 lg:order-1'
						src='../../images/sections/souverain/souverain-radio.png'
						placeholder='none'
						alt='Souverain Radio'
						quality={100}
					/>
					<div className='order-1 text-wrapper lg:order-2'>
						<div className='souverain-radio-title'>Sovereign Radio</div>
						<div className='souverain-radio-text'>
							Sovereign Radio is a limited-edition podcast designed specifically for the Modular Summit
						</div>
						<div className='flex flex-col items-start justify-start md:items-center md:flex-row'>
							<div className='mb-5 mr-8 md:mb-0 basis-full sm:basis-auto souverain-speaker'>Hosted by</div>

							<div className='flex flex-col items-start justify-start md:justify-start md:items-center sm:flex-row max-sm:space-y-2 sm:space-x-6 md:basis-auto basis-full'>
								<div className='basis-full sm:basis-auto flex items-center space-x-3.5'>
									<div className='w-[62px] overflow-hidden rounded-full border-4 border-[#FF2A00]'>
										<StaticImage
											src='../../images/sections/souverain/anna_rose.jpg'
											placeholder='none'
											alt='Souverain Radio'
											quality={100}
										/>
									</div>
									<div className='souverain-speaker text-[#FF2A00]'>Anna Rose</div>
								</div>
								<div className='basis-full sm:basis-auto text-[20px] font-normal max-md:ml-5'>&</div>
								<div className='flex items-center basis-full sm:basis-auto'>
									<div className='order-2 md:order-1 souverain-speaker text-[#5500FF] max-md:ml-3.5 md:mr-3.5'>
										Chjango Unchained
									</div>
									<div className='order-1 md:order-2 w-[62px] overflow-hidden rounded-full border-4 border-[#5500FF]'>
										<StaticImage
											src='../../images/sections/souverain/chjango_unchained.jpg'
											placeholder='none'
											alt='Souverain Radio'
											quality={100}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
