var cssnext = require('postcss-cssnext')
var cssreporter = require('postcss-reporter')
var config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: config.name,
    siteUrl: config.url,
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
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
      resolve: `gatsby-google-analytics-custom`,
      options: {
        trackingId: 'UA-TODO-XX',
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
  ],
}
