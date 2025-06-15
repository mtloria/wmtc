/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `WMTC`,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
        stripMetadata: true,
        failOn: 'error',
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/WMTC_Logo.png"
      }
    }
  ],
  pathPrefix: "",
  assetPrefix: "",
}
