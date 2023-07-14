import React, { useLayoutEffect } from "react";
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

	const createThemeMarkers = () => {
		agendaData.themes.forEach((item, index) => {
			const themeElements = document.querySelectorAll(`#${item.id}`);
			const themeElementHeights = Array.from(themeElements).reduce((acc, curr) => acc + curr.offsetHeight, 0) - 35;
			if (themeElements.length > 0) {
				const firstElement = themeElements[0];
				let beforeElement = firstElement.querySelector("#track-marker");
				if (beforeElement) {
					beforeElement();
				}
				beforeElement = document.createElement("div");
				beforeElement.style.height = `${themeElementHeights}px`;
				beforeElement.style.borderColor = `${agendaData.themes[index].color}`;
				beforeElement.setAttribute("id", "track-marker");

				const trackMarkerText = document.createElement("div");
				trackMarkerText.innerHTML = item.id;
				trackMarkerText.classList.add("track-marker-text");
				beforeElement.appendChild(trackMarkerText);

				firstElement.insertBefore(beforeElement, firstElement.firstChild);
			}
			console.log(`${item.id}: ${themeElementHeights}px`);
		});
	};

	useLayoutEffect(() => {
		createThemeMarkers();
	}, [activeTab, activeDay]);

	return (
		<section id='agenda' className='agenda'>
			<div className='container'>
				<div className='content-wrapper'>
					<div className='flex flex-col items-start justify-between pb-8 md:flex-row md:pb-16'>
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
					<div className='flex flex-col lg:flex-row lg:space-x-20'>
						<div className='basis-full lg:basis-1/4'>
							<TabList activeTab={activeTab} toggleTabs={toggleTabs} />
						</div>

						{activeDay === "Day1" && (
							<div className='basis-full lg:basis-3/4'>
								<EventList activeTab={activeTab} day={agendaData.day1} />
							</div>
						)}
						{activeDay === "Day2" && (
							<div className='basis-full lg:basis-3/4'>
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
			<div className='event-list-border' />
			{activeTab === "Tab1" && (
				<ul className='event-list'>
					{day.stage1.map((item, index) => {
						return <EventItem index={index} item={item} />;
					})}
				</ul>
			)}
			{activeTab === "Tab2" && (
				<ul className='event-list'>
					{day.stage2.map((item, index) => {
						return <EventItem key={index} item={item} />;
					})}
				</ul>
			)}
			{activeTab === "Tab3" && (
				<ul className='event-list'>
					{day.stage3.map((item, index) => {
						return <EventItem key={index} item={item} />;
					})}
				</ul>
			)}
		</div>
	);
}

function EventItem({ item }) {
	return (
		<li id={item.theme.replace(/[\s+_.]+/g, "-")} className='event-item'>
			<div className='mb-4 event-title element-spacing'>{item.title}</div>

			<div className='flex flex-col max-sm:space-y-3 sm:space-x-14 md:space-x-16 sm:flex-row items-star'>
				<div className='flex items-center space-x-5 h-fit md:basis-1/3 lg:basis-3/12'>
					<div className='event-text whitespace-nowrap'>{item.date}</div>
					<div className='flex'>
						<svg className='w-[5px] h-[5px] inline-block mt-[2px]' xmlns='http://www.w3.org/2000/svg'>
							<rect width='5' height='5' x='60' y='13' fill='#000' fillRule='evenodd' rx='2.5' transform='translate(-60 -13)' />
						</svg>
					</div>
					<div className='event-text'>{item.time}</div>
				</div>
				<div className='flex items-start space-x-5 md:basis-2/3 lg:basis-9/12'>
					{item.speakers?.length > 1 && (
						<>
							<div className='event-text'>Speakers:</div>
							<div className='event-text event-text-speakers'>{item.speakers}</div>
						</>
					)}
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
					<div className='flex flex-wrap md:mt-[8px]'>
						<div className='bg-red-500 tab-tags'>ROLLUPS</div>
						<div className='bg-blue-500 tab-tags'>DATA-AVAILABILITY</div>
						<div className='bg-green-500 tab-tags'>ZK</div>
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
