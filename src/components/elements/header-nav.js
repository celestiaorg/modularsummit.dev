import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function HeaderNav(props) {
	const pathsArray = [
		{
			id: 1,
			title: "Home",
			path: "/",
			type: "internal",
		},
		{
			id: 2,
			title: "Speakers",
			path: "/#speakers",
			type: "anchor",
		},
		{
			id: 3,
			title: "Agenda",
			path: "/#agenda",
			type: "anchor",
		},
		{
			id: 4,
			title: "Day 1",
			path: "/day-1",
			type: "internal",
		},
		{
			id: 5,
			title: "Day 2",
			path: "/day-2",
			type: "internal",
		},
		{
			id: 6,
			title: "Sponsors",
			path: "/#sponsors",
			type: "anchor",
		},
		{
			id: 7,
			title: "Partners",
			path: "/#partners",
			type: "anchor",
		},
		{
			id: 8,
			title: "Venue",
			path: "/#venue",
			type: "anchor",
		},
	];

	return (
		<nav className={`header-nav`}>
			<div className={`container`}>
				<div className='flex flex-wrap items-center h-full'>
					<div className='basis-full'>
						<ul className='flex flex-wrap justify-end space-y-1 lg:space-y-0 lg:space-x-10 max-lg:pb-[56px]'>
							{pathsArray.map((item) => {
								return (
									<li key={item.id}>
										{item.type === "internal" ? (
											<Link onClick={props.event} to={item.path} className='link nav-link' target="_blank" rel="noopener noreferrer">
												{item.title}
											</Link>
										) : (
											<AnchorLink onAnchorLinkClick={props.event} stripHash to={item.path} title={item.title} className='link nav-link' target="_blank" rel="noopener noreferrer" />
										)}
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
