var cssnext = require('postcss-cssnext')
var cssreporter = require('postcss-reporter')
var config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: config.name,
    siteUrl: config.url,
  },
  plugins: [
    // Turn on offline before deploy
    // `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        data: '@import "~app.scss";',
        postCssPlugins: [
          cssnext({browsers: ['last 2 versions', 'IE > 10']}),
          cssreporter({ clearMessages: true }),
        ],
        precision: 5, // SASS default: 5
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-google-analytics-custom`,
      options: {
        trackingId: config.googleAnalytics,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
