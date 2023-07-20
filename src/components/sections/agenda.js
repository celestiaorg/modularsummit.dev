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
		// Draw lines for each element
		const eventItems = document.querySelectorAll("li.event-item");
		eventItems.forEach((item) => {
			const id = item.getAttribute("id");
			const theme = agendaData.themes.find((theme) => theme.id === id);
			if (theme) {
				const beforeElement = document.createElement("div");
				beforeElement.style.borderColor = theme.color;
				beforeElement.setAttribute("id", "track-marker");
				beforeElement.style.height = "calc(100% + 2px)";
				item.insertBefore(beforeElement, item.firstChild);
			}
		});

		// get all Li elements with the same id and find the middle one append append a class to the claslist "Middle"
		
	};

	useLayoutEffect(() => {
		createThemeMarkers();
	}, [activeTab, activeDay]);

	// // const day1Themes = getThemes("day1", "stage1");
	// console.log(getThemes("day1", "stage1"));

	return (
		<section id='agenda' className='agenda'>
			<div className='container'>
				<div className='content-wrapper'>
					<div className='flex flex-col items-start justify-between pb-8 md:flex-row md:pb-16'>
						<div className='w-full max-md:mb-10'>
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
					<div className='flex flex-col lg:flex-row lg:space-x-20 xl:space-x-28'>
						<div className='basis-full lg:basis-4/12 xl:basis-3/12'>
							<TabList activeTab={activeTab} activeDay={activeDay} agendaData={agendaData} toggleTabs={toggleTabs} />
						</div>
						{activeDay === "Day1" && (
							<div className='basis-full lg:basis-8/12 xl:basis-9/12'>
								<EventList activeTab={activeTab} day={agendaData.day1} />
							</div>
						)}
						{activeDay === "Day2" && (
							<div className='basis-full lg:basis-8/12 xl:basis-9/12'>
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
		<li id={item.theme ? item.theme.replace(/[\s+_.]+/g, "-") : "theme-key-not-defined"} className='event-item'>
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
					{item.speakers.length > 0 && (
						<>
							<div className='event-text'>Speakers:</div>
							<div className='event-text event-text-speakers'>{item.speakers}</div>
						</>
					)}
				</div>
			</div>
			{item.abstract.length > 0 && (
				<div className='flex mt-4 basis-auto'>
					<p className='event-abstarct'>{item.abstract}</p>
				</div>
			)}
		</li>
	);
}

function TabList({ agendaData, activeTab, activeDay, toggleTabs }) {
	const getThemes = (day, stage) => {
		const stages = agendaData[day];
		const events = stages[stage];
		const themes = events
			.map((item) => item.theme)
			.filter((theme) => theme !== "")
			.reduce((uniqueThemes, theme) => {
				if (!uniqueThemes.includes(theme)) {
					uniqueThemes.push(theme);
				}
				return uniqueThemes;
			}, []);
		return themes.map((themeId) => {
			const theme = agendaData.themes.find((t) => t.id === themeId);
			return theme ? { id: theme.trackLabel, color: theme.color } : { id: "", color: "" };
		});
	};

	return (
		<div className='md:pt-8 stage-stack'>
			<button
				className={`stage-card ${activeTab === "Tab1" && "selected"} ${activeTab !== "Tab1" && activeTab !== "Tab2" && "width-border"}`}
				onClick={() => toggleTabs("Tab1")}
			>
				<div className='stage-card-arrow' />
				<div className='stage-card-container'>
					<div className='basis-auto sm:basis-1/3 md:basis-1/2 lg:basis-auto'>
						<div className='tab'>Galois Stage</div>
					</div>
					<div className='basis-2/3 md:basis-1/2 lg:basis-auto'>
						<div className='flex flex-wrap justify-end md:justify-start'>
							{activeDay === "Day1"
								? getThemes("day1", "stage1").map((theme) => {
										return (
											<div className='tab-tags' style={{ backgroundColor: theme.color }}>
												{theme.id}
											</div>
										);
								  })
								: getThemes("day2", "stage1").map((theme) => {
										return (
											<div className='tab-tags' style={{ backgroundColor: theme.color }}>
												{theme.id}
											</div>
										);
								  })}
						</div>
					</div>
				</div>
			</button>
			<button
				className={`stage-card ${activeTab === "Tab2" && "selected"} ${activeTab !== "Tab2" && activeTab !== "Tab3" && "width-border"}`}
				onClick={() => toggleTabs("Tab2")}
			>
				<div className='stage-card-arrow' />
				<div className='stage-card-container'>
					<div className='basis-auto sm:basis-1/3 md:basis-1/2 lg:basis-auto'>
						<div className='tab'>Fourier Stage</div>
					</div>
					<div className='basis-2/3 md:basis-1/2 lg:basis-auto'>
						<div className='flex flex-wrap justify-end md:justify-start'>
							{activeDay === "Day1"
								? getThemes("day1", "stage2").map((theme) => {
										return (
											<div className='tab-tags' style={{ backgroundColor: theme.color }}>
												{theme.id}
											</div>
										);
								  })
								: getThemes("day2", "stage2").map((theme) => {
										return (
											<div className='tab-tags' style={{ backgroundColor: theme.color }}>
												{theme.id}
											</div>
										);
								  })}
						</div>
					</div>
				</div>
			</button>

			<button className={`stage-card ${activeTab === "Tab3" && "selected"}`} onClick={() => toggleTabs("Tab3")}>
				<div className='stage-card-arrow' />
				<div className='stage-card-container'>
					<div className='basis-auto sm:basis-1/3 md:basis-1/2 lg:basis-auto'>
						<div className='tab'>Cauchy Stage</div>
					</div>
					<div className='basis-2/3 md:basis-1/2 lg:basis-auto'>
						<div className='flex flex-wrap justify-end md:justify-start'>
							{activeDay === "Day1"
								? getThemes("day1", "stage3").map((theme) => {
										return (
											<div className='tab-tags' style={{ backgroundColor: theme.color }}>
												{theme.id}
											</div>
										);
								  })
								: getThemes("day2", "stage3").map((theme) => {
										return (
											<div className='tab-tags' style={{ backgroundColor: theme.color }}>
												{theme.id}
											</div>
										);
								  })}
						</div>
					</div>
				</div>
			</button>
		</div>
	);
}
