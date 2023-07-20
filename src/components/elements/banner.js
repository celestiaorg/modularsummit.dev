import React from "react";

export default function LiveStreamBanner({ title, link, linkLabel }) {
	return (
		<div className='w-full mt-8 md:w-auto livestream-banner'>
			<div className='flex flex-col items-start justify-between lg:items-center lg:flex-row'>
				<div className='livestream-text'>{title}</div>
				<div className='flex items-center'>
					<a className='livestream-button' href={link} target='_blank' rel='noreferrer'>
						<svg className="mr-3" xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
							<circle cx='12.5' cy='12.5' r='12.5' fill='white' />
							<path
								d='M10.3334 14.8209V12.6969V10.5729C10.3334 9.76671 11.2385 9.29198 11.9018 9.75027L14.9759 11.8742C15.5513 12.2718 15.5513 13.1221 14.9759 13.5197L11.9018 15.6436C11.2385 16.1019 10.3334 15.6271 10.3334 14.8209Z'
								fill='#4F02EC'
							/>
						</svg>
						<div className='button-label'>{linkLabel}</div>
					</a>
				</div>
			</div>
		</div>
	);
}
