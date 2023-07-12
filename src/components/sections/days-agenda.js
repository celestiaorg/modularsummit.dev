import * as React from "react";
import { useState } from "react";

export default function DaysAgenda({ data }) {
	const [activeTab, setActiveTab] = useState("Tab1");

	const toggleTabs = (tab) => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	};

	return (
		<section className='days-agenda'>
			<div className='container'>
				<div className='content-wrapper'>
					<div className='flex flex-col items-center justify-between pb-10 md:flex-row md:pb-16'>
						<div className=''>
							<h2 className='heading-xl'>Agenda</h2>
						</div>
					</div>
					<div className='flex flex-col lg:flex-row lg:space-x-20'>
						<div className='basis-full sm:basis-1/4'>
							<TabList activeTab={activeTab} toggleTabs={toggleTabs} />
						</div>

						<div className='basis-full lg:basis-3/4'>
							<div className='w-full mt-8 md:w-auto livestream-banner'>
								<div className='flex flex-col items-start justify-between px-2 lg:space-x-4 max-lg:space-y-2 lg:items-center lg:flex-row'>

									<div className='livestream-text'>Watch our livestream on Youtube</div>
									<div className='flex items-center space-x-3'>
										<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
											<circle cx='12.5' cy='12.5' r='12.5' fill='white' />
											<path
												d='M10.3334 14.8209V12.6969V10.5729C10.3334 9.76671 11.2385 9.29198 11.9018 9.75027L14.9759 11.8742C15.5513 12.2718 15.5513 13.1221 14.9759 13.5197L11.9018 15.6436C11.2385 16.1019 10.3334 15.6271 10.3334 14.8209Z'
												fill='#4F02EC'
											/>
										</svg>
										<div className="button-label">Link is comming soon</div>
									</div>
								</div>
							</div>
							<EventList activeTab={activeTab} day={data} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function EventList({ activeTab, day }) {
	return (
		<div className=''>
			<div className='event-list-border' />
			{activeTab === "Tab1" && (
				<ul className=''>
					{day.stage1.map((item, index) => {
						return <EventItem index={index} item={item} />;
					})}
				</ul>
			)}
			{activeTab === "Tab2" && (
				<ul className=''>
					{day.stage2.map((item, index) => {
						return <EventItem index={index} item={item} />;
					})}
				</ul>
			)}
			{activeTab === "Tab3" && (
				<ul className=''>
					{day.stage3.map((item, index) => {
						return <EventItem index={index} item={item} />;
					})}
				</ul>
			)}
		</div>
	);
}

function EventItem({ index, item }) {
	return (
		<li key={index} className='py-8 md:pl-10'>
			<div className='mb-4 event-title element-spacing'>{item.title}</div>

			<div className='flex flex-wrap max-md:space-y-1.5 md:space-x-5'>
				<div className='flex items-start basis-full md:basis-auto'>
					<div className='event-text min-w-[95px] md:min-w-[127px]'>{item.date}</div>
					<div className='w-[16px] md:w-[25px]'>
						<svg className='w-[5px] h-[5px] inline-block mb-0.5' xmlns='http://www.w3.org/2000/svg'>
							<rect width='5' height='5' x='60' y='13' fill='#000' fill-rule='evenodd' rx='2.5' transform='translate(-60 -13)' />
						</svg>
					</div>
					<div className='event-text w-[100px]'>{item.time}</div>
				</div>
				<div className='flex items-start basis-full md:basis-auto'>
					<div className='min-w-[100px] md:min-w-[110px] lg:min-w-[135px] event-text'>Speakers:</div>
					<div className='w-full event-text event-text-speakers'>{item.speakers}</div>
				</div>
			</div>
		</li>
	);
}

function TabList({ activeTab, toggleTabs }) {
	return (
		<div className='md:pt-8 stage-stack'>
			<button
				className={`stage-card ${activeTab === "Tab1" && "selected"} ${activeTab !== "Tab1" && activeTab !== "Tab2" && "width-border"}`}
				onClick={() => toggleTabs("Tab1")}
			>
				<div className='stage-card-arrow' />
				<div className='stage-card-container'>
					<div className='tabe-title'>Galois Stage</div>
					<div className='flex md:mt-[8px] space-x-2 md:space-x-4'>
						<div className='tab-tag-1'>ZK Track</div>
					</div>
				</div>
			</button>

			<button
				className={`stage-card ${activeTab === "Tab2" && "selected"} ${activeTab !== "Tab2" && activeTab !== "Tab3" && "width-border"}`}
				onClick={() => toggleTabs("Tab2")}
			>
				<div className='stage-card-arrow' />
				<div className='stage-card-container'>
					<div className='tabe-title'>Fourier Stage</div>
					<div className='flex md:mt-[8px] space-x-2 md:space-x-4'>
						<div className='tab-tag-3'>Gaming</div>
					</div>
				</div>
			</button>

			<button className={`stage-card ${activeTab === "Tab3" && "selected"}`} onClick={() => toggleTabs("Tab3")}>
				<div className='stage-card-arrow' />
				<div className='stage-card-container'>
					<div className='tabe-title'>Cauchy Stage</div>
				</div>
			</button>
		</div>
	);
}
