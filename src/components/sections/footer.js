import * as React from "react";
import { footerData } from "../../data/footer/footer-data";
import { Button } from "../elements/button";
import { Twitter } from "../elements/icons.js";

export default function Footer() {
	return (
		<section className='footer py-[30px]'>
			<div className='container'>
				<div className={"flex flex-wrap sm:flex-nowrap items-center max-md:space-y-10 justify-center md:justify-between"}>
					<div className='basis-auto max-md:mb-4 max-md:w-full'>
						<Button
							class={footerData.button.class}
							type={footerData.button.type}
							text={footerData.button.text}
							url={footerData.button.url}
						/>
					</div>
					<div className='basis-full md:basis-auto'>
					</div>
					{/* <div className='flex flex-1 justify-center sm:justify-end space-x-[24px] basis-auto sm:basis-full'> */}
					{/* <div className='basis-auto'>
							<a className='icon' href={footerData.social.discord} target='_blank' rel='noreferrer noopener'>
								<Discord />
							</a>
						</div>
						<div className='basis-auto'>
							<a className='icon' href={footerData.social.github} target='_blank' rel='noreferrer noopener'>
								<Github />
							</a>
						</div>
						<div className='basis-auto'>
							<a className='icon' href={footerData.social.github} target='_blank' rel='noreferrer noopener'>
								<Telegram />
							</a>
						</div> */}
					<div className='basis-auto'>
						<a className='icon' href={footerData.social.twitter} target='_blank' rel='noreferrer noopener'>
							<Twitter />
						</a>
					</div>
					{/* </div> */}
				</div>
			</div>
		</section>
	);
}
