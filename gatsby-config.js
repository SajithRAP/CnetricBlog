module.exports = {
  siteMetadata: {
    title: `Rapid Acceleration Partners`,
    description: `The story of Artificial Intelligence transforming businesses is quite promising. However, most organizations are exploring narrow applications of AI, or restricting it to a single business process. Predictions state that AI will generate a revenue of $13 trillion in the coming decade, so it is the ideal time for companies to capitalize on AI technology`,
    author: `@sajith`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // baseUrl: `http://cnetric.local/`,
        // protocol: `http`,
        baseUrl: `https://blog.rapidautomation.ai/`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        excludedRoutes: [
          "**/options/options",
          "**/form",
          "**/users",
          "**/settings",
          "**/themes",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
