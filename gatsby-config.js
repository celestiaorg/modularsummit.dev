module.exports = {
  siteMetadata: {
    title: `The Modular Summit`,
    siteUrl: `https://modularsummit.dev`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", {
    resolve: `gatsby-transformer-sharp`,
    options: {
      // The option defaults to true
      checkSupportedExtensions: false,
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: `gatsby-plugin-plausible`,
    options: {
      domain: `modularsummit.dev`,
      // https://github.com/pixelplicity/gatsby-plugin-plausible/issues/49#issuecomment-716125674
      customDomain: `plausible.celestia.org/js/plausible.js?original=`,
    },
  }]
};
