import React from "react";
import { Link } from "gatsby";

export function Button(props) {
	if (props.type === "external") {
		return (
			<a className={`button ${props.class}`} href={props.url} id={props.type}>
				<span className='filter animate' />
				<span className='label'>{props.text}</span>
				{props.icon && (
					<svg className='ml-3 icon' xmlns='http://www.w3.org/2000/svg' width='14' height='12'>
						<g fill='none' fill-rule='evenodd' stroke='#000' stroke-linecap='square' stroke-width='1.2'>
							<path d='M1 5.891h11.21' />
							<path stroke-linejoin='bevel' d='M7.69 1 13 6l-5.31 5' />
						</g>
					</svg>
				)}
			</a>
		);
	} else if (props.type === "internal") {
		return (
			<Link className={`button ${props.class}`} to={props.url} id={props.type}>
				<span className='filter animate' />
				<span className='label'>{props.text}</span>
				{props.icon && (
					<svg className='icon' xmlns='http://www.w3.org/2000/svg' width='14' height='12'>
						<g fill='none' fill-rule='evenodd' stroke='#000' stroke-linecap='square' stroke-width='1.2'>
							<path d='M1 5.891h11.21' />
							<path stroke-linejoin='bevel' d='M7.69 1 13 6l-5.31 5' />
						</g>
					</svg>
				)}
			</Link>
		);
	} else if (props.type === "trigger") {
		return (
			<button className={`button ${props.class}`} id={props.type} onClick={props.onClick}>
				<span className='filter animate' />
				<span className='label'>{props.text}</span>
				{props.icon && (
					<svg className='icon' xmlns='http://www.w3.org/2000/svg' width='14' height='12'>
						<g fill='none' fill-rule='evenodd' stroke='#000' stroke-linecap='square' stroke-width='1.2'>
							<path d='M1 5.891h11.21' />
							<path stroke-linejoin='bevel' d='M7.69 1 13 6l-5.31 5' />
						</g>
					</svg>
				)}
			</button>
		);
	}
}
