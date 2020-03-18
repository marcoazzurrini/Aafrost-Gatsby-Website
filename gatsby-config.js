/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "AaFrost",
    siteUrl: `https://www.aafrost.co.uk/`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img/`,
        name: "images",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AA Frost UK`,
        short_name: `AA Frost`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#127EB1`,
        display: `standalone`,
        icon: `src/img/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-advanced-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-crisp-chat",
      options: {
        websiteId: "cf0d2029-ab3c-45ad-a8c5-a599d3574928",
        enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Libre Baskersville, Montserrat"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
}
