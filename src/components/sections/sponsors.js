import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Sponsors() {
	return (
		<section className='sponsors'>
			<div className='container'>
				<div className='flex flex-wrap justify-start lg:flex-nowrap'>
					<div className='basis-full lg:basis-1/4'>
						<h2 className='heading-xl'>Sponsors</h2>
					</div>
					<div className='wrapper basis-full lg:basis-3/4'>
						<div className='category'>
							<h3 className='title'>Platinum</h3>
							<StaticImage className='w-[240px]' src='../../images/sections/sponsors/anoma.png' placeholder='none' quality={100} />
						</div>
						<div className='category'>
							<h3 className='title'>Gold</h3>
							{/* <StaticImage className='w-[240px]' src='../../images/sections/sponsors/anoma.png' placeholder='none' quality={100} /> */}
						</div>
						<div className='category'>
							<h3 className='title'>Silver</h3>
							<StaticImage className='w-[200px]' src='../../images/sections/sponsors/hyperlane.png' placeholder='none' quality={100} />
						</div>
						<div className='category'>
							<h3 className='title'>Bronze</h3>
							<StaticImage className='w-[170px]' src='../../images/sections/sponsors/ankr.png' placeholder='none' quality={100} />
						</div>
						<div className='category'>
							<h3 className='title'>Other Packages</h3>
							<div className='flex flex-wrap items-center lg:flex-nowrap max-lg:space-y-4 lg:space-x-14'>
								<div className='basis-auto'>
									<StaticImage
										className='w-[160px]'
										src='../../images/sections/sponsors/spartan.png'
										placeholder='none'
										quality={100}
									/>
								</div>
								<div className='basis-auto'>
									<StaticImage
										className='w-[160px]'
										src='../../images/sections/sponsors/signature.png'
										placeholder='none'
										quality={100}
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
