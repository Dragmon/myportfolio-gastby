require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Portfolio Carlos Gerardo Pérez Horta`,
    description: `Software Developmentt especialista en FrontEnd`,
    author: `Carlos Gerardo Pérez Horta`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_API_KEY,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        options: {
          path: `@import ${__dirname}/src/styles/global.scss`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/custom/",
        https: true,
        www: true,
        custom: `
        <filesMatch ".(css|jpg|jpeg|png|gif|ico|ttf|svg)$">
        Header set Cache-Control "max-age=2628000, public"
        </filesMatch>
        `,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_API_URL,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          `Skills`,
          `Projects`,
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fdfefa`,
        theme_color: `#1565c0`,
        display: `minimal-ui`,
        icon: `src/images/icono-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
