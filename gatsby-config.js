var cssnext = require('postcss-cssnext')
var cssreporter = require('postcss-reporter')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    {
      // resolve: `gatsby-plugin-postcss-sass`,
      resolve: `gatsby-sass-loader-custom`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-TODO-XX',
      },
    },
  ],
}
