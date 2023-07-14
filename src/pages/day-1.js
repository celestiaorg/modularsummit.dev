import * as React from "react";
import Layout from "../components/layout";
import AgendaHeroDay1 from "../components/sections/agenda-hero-day1";
import DaysAgenda from "../components/sections/days-agenda";
import { graphql } from "gatsby";
import { agendaData } from "../data/agenda/agenda-data";

export default function Day1() {
	return (
		<Layout footerType="agenda">
			<AgendaHeroDay1 data={agendaData.day1} />
			<DaysAgenda data={agendaData.day1} activeDay={"Day1"}/>
		</Layout>
	);
}

export const query = graphql`
	{
		site {
			siteMetadata {
				title
				description
				siteUrl
				image
			}
		}
	}
`;

export function Head({ data }) {
	const siteMeta = data.site.siteMetadata;
	const pageMeta = {
		title: "Day 1",
	};

	return (
		<>
			<title>{`${siteMeta.title} | ${pageMeta.title}`}</title>
			<meta name='description' content={siteMeta.description} />

			{/* Google / Search Engine Tags */}
			<meta itemProp='name' content={`${siteMeta.title} | ${pageMeta.title}`} />
			<meta itemProp='description' content={siteMeta.description} />
			<meta itemProp='image' content={siteMeta.siteUrl + siteMeta.image} />

			{/* Facebook Meta Tags */}
			<meta property='og:url' content={`${siteMeta.siteUrl}`} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={`${siteMeta.title} | ${pageMeta.title}`} />
			<meta property='og:description' content={siteMeta.description} />
			<meta property='og:image' content={siteMeta.siteUrl + siteMeta.image} />

			{/* Twitter Meta Tags */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={`${siteMeta.title} | ${pageMeta.title}`} />
			<meta name='twitter:description' content={siteMeta.description} />
			<meta name='twitter:image' content={siteMeta.siteUrl + siteMeta.image} />

			<meta name="format-detection" content="telephone=no"/>
		</>
	);
}
