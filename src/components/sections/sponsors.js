import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Sponsors() {
	return (
		<section className='sponsors'>
			<div className='container'>
				<div className='flex flex-col items-center'>
					<h2 className='mb-[60px] heading-xl'>Sponsors</h2>
					<StaticImage className='w-[260px] mb-[70px]' src='../../images/sections/sponsors/anoma.png' placeholder='none' quality={100} />
					<div className="flex items-center lg:space-x-[74px] mb-[28px]">
						<div className='item'>
							<StaticImage className='w-[224px]' src='../../images/sections/sponsors/hyperlane.png' placeholder='none' quality={100} />
						</div>
						<div className='item'>
							<StaticImage className='w-[75px]' src='../../images/sections/sponsors/risczero.png' placeholder='none' quality={100} />
						</div>
						<div className='item'>
							<StaticImage className='w-[234px]' src='../../images/sections/sponsors/espresso.png' placeholder='none' quality={100} />
						</div>
					</div>
					<div className="flex items-center lg:space-x-[74px]">
						<div className='item'>
							<StaticImage className='w-[216px]' src='../../images/sections/sponsors/spartan.png' placeholder='none' quality={100} />
						</div>
						<div className='item'>
							<StaticImage className='w-[226px]' src='../../images/sections/sponsors/signature.png' placeholder='none' quality={100} />
						</div>
						<div className='item'>
							<StaticImage className='w-[85px]' src='../../images/sections/sponsors/avail.png' placeholder='none' quality={100} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
