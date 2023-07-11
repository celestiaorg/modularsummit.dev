import React from "react";
import { Link } from "gatsby";

export default function HeaderNav(props) {
	const pathsArray = [
		{
			id: 1,
			title: "Home",
			path: "/",
		},
		{
			id: 2,
			title: "Agenda",
			path: "/agenda",
		},
		{
			id: 3,
			title: "Speakers",
			path: "/",
		},
		{
			id: 4,
			title: "Sponsors",
			path: "/",
		},
		{
			id: 5,
			title: "Live Stream",
			path: "/",
		},
	];

	return (
		<nav className={`header-nav`}>
			<div className={`container`}>
				<div className='flex flex-wrap items-center h-full'>
					<div className='basis-full'>
						<ul className='flex flex-wrap justify-end space-y-1 lg:space-y-0 lg:space-x-10'>
							{pathsArray.map((item) => {
								return (
									<li key={item.id}>
										<Link onClick={props.event} to={item.path} className='link nav-link' target="_blank" rel="noopener noreferrer">
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
