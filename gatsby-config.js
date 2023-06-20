/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Modular Summit`,
		description: `Join us for a two-day event to learn from the visionary builders at the forefront of the modular blockchain revolution.`,
		siteUrl: `https://modularsummit.dev`,
		image: `/modular-summit-og-image.jpg`,
	},
	plugins: [
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `speakers`,
				path: `${__dirname}/src/images/sections/speakers`,
				sourceinstanceName: `speakers`,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				//host: 'https://www.example.com',
				//sitemap: 'https://www.example.com/sitemap.xml',
				policy: [{userAgent: '*', allow: '/'}]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `brands`,
				path: `${__dirname}/src/images/sections/brands`,
				sourceinstanceName: `brands`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-postcss`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `modular-summit`,
				short_name: `modular-summit-home`,
				start_url: `/`,
				background_color: `#F2F2F2`,
				theme_color: `#F2F2F2`,
				display: `minimal-ui`,
				icon: `src/images/sections/header/modular-summit-favicon.svg`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
					options: {
						props: {
							className: "inline-svg",
						},
					},
				},
			},
		},
	],
};
