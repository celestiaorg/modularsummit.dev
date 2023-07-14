import * as React from "react";
import { useState } from "react";
import { agendaData } from "../../data/agenda/agenda-data";
import { Button } from "../elements/button";

export default function Agenda() {
	const [activeTab, setActiveTab] = useState("Tab1");
	const [activeDay, setActiveDay] = useState("Day1");

	const toggleTabs = (tab) => {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	};

	const toggleDay = (tab) => {
		if (activeDay !== tab) {
			setActiveDay(tab);
		}
	};

	return (
		<section id="agenda" className='agenda'>
			<div className='container'>
				<div className='content-wrapper'>
					<div className='flex flex-col items-center justify-between pb-8 md:flex-row md:pb-16'>
						<div className='max-md:mb-10'>
							<h2 className='heading-xl'>Agenda</h2>
						</div>
						<div className='w-full md:w-auto'>
							<div className='flex justify-center space-x-4'>
								<Button
									class={agendaData.buttons.day1.class + (activeDay === "Day1" ? " selected" : "")}
									type={agendaData.buttons.day1.type}
									text={agendaData.buttons.day1.text}
									url={agendaData.buttons.day1.url}
									onClick={() => toggleDay("Day1")}
								/>
								<Button
									class={agendaData.buttons.day2.class + (activeDay === "Day2" ? " selected" : "")}
									type={agendaData.buttons.day2.type}
									text={agendaData.buttons.day2.text}
									url={agendaData.buttons.day2.url}
									onClick={() => toggleDay("Day2")}
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row md:space-x-20'>
						<div className='basis-1/4'>
							<TabList activeTab={activeTab} toggleTabs={toggleTabs} />
						</div>

						{activeDay === "Day1" && (
							<div className='basis-3/4'>
								<EventList activeTab={activeTab} day={agendaData.day1} />
							</div>
						)}
						{activeDay === "Day2" && (
							<div className='basis-3/4'>
								<EventList activeTab={activeTab} day={agendaData.day2} />
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}


function EventList({ activeTab, day }) {
	return (
		<div className=''>
			<div className="event-list-border"/>
			{activeTab === "Tab1" && (
				<ul className=''>
					{day.stage1.map((item, index) => {
						return (
							<EventItem index={index} item={item}/>
						);
					})}
				</ul>
			)}
			{activeTab === "Tab2" && (
				<ul className=''>
					{day.stage2.map((item, index) => {
						return (
							<EventItem index={index} item={item}/>
						);
					})}
				</ul>
			)}
			{activeTab === "Tab3" && (
				<ul className=''>
					{day.stage3.map((item, index) => {
						return (
							<EventItem index={index} item={item}/>
						);
					})}
				</ul>
			)}
		</div>
	);
}


function EventItem({index, item }) {
	return (
		<li key={index} className='py-8 md:pl-10'>
			<div className='mb-3.5 event-title element-spacing'>{item.title}</div>

			<div className='flex flex-wrap max-md:space-y-1.5 md:space-x-5'>
				<div className='flex items-center basis-full md:basis-auto'>
					<div className='event-text w-[95px] md:w-[127px]'>{item.date}</div>
					<div className='w-[16px] md:w-[25px]'>
						<svg className='w-[5px] h-[5px] inline-block mb-0.5' xmlns='http://www.w3.org/2000/svg'>
							<rect width='5' height='5' x='60' y='13' fill='#000' fill-rule='evenodd' rx='2.5' transform='translate(-60 -13)' />
						</svg>
					</div>
					<div className='event-text w-[180px]'>{item.time}</div>
				</div>
				{item.speakers && (
				<div className='flex items-center basis-full md:basis-auto'>
					<div className='w-[100px] md:w-[135px] event-text'>Speakers:</div>
					<div className='w-full event-text event-text-speakers'>{item.speakers}</div>
				</div>
				)}
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
					{/* <div className='flex md:mt-[8px] space-x-2 md:space-x-4'>
						<div className='tab-tag-1'>ZK Track</div>
					</div> */}
				</div>
			</button>

			<button
				className={`stage-card ${activeTab === "Tab2" && "selected"} ${activeTab !== "Tab2" && activeTab !== "Tab3" && "width-border"}`}
				onClick={() => toggleTabs("Tab2")}
			>
				<div className='stage-card-arrow' />
				<div className='stage-card-container'>
					<div className='tabe-title'>Fourier Stage</div>
					{/* <div className='flex md:mt-[8px] space-x-2 md:space-x-4'>
						<div className='tab-tag-3'>Gaming</div>
					</div> */}
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
