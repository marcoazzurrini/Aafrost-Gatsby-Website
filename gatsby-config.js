/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
var proxy = require("http-proxy-middleware")

module.exports = {
  plugins: [
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
  ],
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
}
