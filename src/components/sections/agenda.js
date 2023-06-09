import * as React from "react";
import { agendaData } from "../../data/agenda/agenda-data";
import { Button } from "../elements/button";

export default function Agenda() {
	return (
		<section className='agenda'>
			<div className='container'>
				<div className='content-wrapper'>
					<div className='flex items-center justify-between pb-8 md:pt-8 md:pb-16'>
						<div className='basis-auto'>
							<h2 className="heading-xl">{agendaData.title}</h2>
						</div>
						<div className='hidden basis-auto md:block'>
							<Button
								class={agendaData.buttons.primary.class}
								type={agendaData.buttons.primary.type}
								text={agendaData.buttons.primary.text}
								url={agendaData.buttons.primary.url}
							/>
						</div>
					</div>
					<ul className=''>
						{agendaData.events.map((item, index) => {
							return (
								<li key={index} className='flex flex-wrap items-center justify-between py-8 md:pl-10'>
									<div className='flex flex-wrap md:flex-nowrap basis-full sm:basis-8/12 lg:basis-8/12 xl:basis-10/12'>
										<div className='basis-[60px] order-2 md:order-1'>
											<div className='mt-2 event-title'>{item.title}</div>
										</div>
										<div className='basis-[5px] order-1 md:order-2 max-md:mr-5'>
											<svg className='w-[5px] h-[5px] inline-block' xmlns='http://www.w3.org/2000/svg'>
												<rect
													width='5'
													height='5'
													x='60'
													y='13'
													fill='#000'
													fill-rule='evenodd'
													rx='2.5'
													transform='translate(-60 -13)'
												/>
											</svg>
										</div>
										<div className='order-3 md:pl-5 max-md:mt-5 basis-full event-text'>{item.text}</div>
									</div>
									<div className='basis-full sm:basis-auto lg:basis-auto xl:basis-auto max-sm:mt-4 max-md:mt-7'>
										<Button
											class={agendaData.buttons.link.class}
											type={agendaData.buttons.link.type}
											text={agendaData.buttons.link.text}
											url={item.url}
											icon={true}
										/>
									</div>
								</li>
							);
						})}
					</ul>
					<div className='hidden mt-3 md:mt-10 max-md:block'>
							<Button
								class={agendaData.buttons.primary.class}
								type={agendaData.buttons.primary.type}
								text={agendaData.buttons.primary.text}
								url={agendaData.buttons.primary.url}
							/>
						</div>
				</div>
			</div>
		</section>
	);
}
