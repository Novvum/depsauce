const req = require('require-yml');
const config = req('./config.yml');

module.exports = {
  siteMetadata: {
    ...config.siteMetadata,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'LIB',
        // This is field under which it's accessible
        fieldName: 'lib',
        // Url to query from
        url: 'https://librariesio-graphql.now.sh',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styled/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifest.name,
        short_name: config.manifest.short_name,
        start_url: config.manifest.start_url,
        background_color: config.manifest.background_color,
        theme_color: config.manifest.theme_color,
        display: config.manifest.display,
        icon: config.manifest.icon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.analytics.googleTrackingId,
      },
    },
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
  ],
};
