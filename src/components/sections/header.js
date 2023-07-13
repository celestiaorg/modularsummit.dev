import React, { useState } from "react";
import HeaderNav from "../elements/header-nav";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useLockBodyScroll, useToggle } from "react-use";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [locked, toggleLocked] = useToggle(false);
	const scrollPosition = useScrollPosition();

	// useLockBodyScroll - locks scrolling on the body element for modals
	useLockBodyScroll(locked);

	const toggleClick = () => {
		setMenuOpen((value) => !value);
		toggleLocked((value) => !value);
	};

	return (
		<header id={`header`} className={`header ${menuOpen ? "menu-opened" : ""} ${scrollPosition > 50 ? "shrinked-header" : ""}`}>
			<div className='container overflow-y-auto'>
				<div className='flex items-center justify-center nav-wrapper'>
					<div className={`basis-auto z-0 order-3 lg:order-2 min-w-[32px]`}>
						<HeaderNav event={toggleClick} />
					</div>
					<div className={`basis-auto lg:hidden z-10 order-1 lg:order-3 mr-[-36px] lg:mr-0`}>
						<div tabIndex={0} role='button' className={`hamburger`} onClick={() => toggleClick()} onKeyDown={() => toggleClick()}>
							<div className="box-wrapper">
								<div className={`box box-1`} />
								<div className={`box box-2`} />
							</div>
							<div className="box-wrapper">
								<div className={`box box-3`} />
								<div className={`box box-4`} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
