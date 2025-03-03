/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `WMTC`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/WMTC_Logo.png"
      }
    }
  ],
  pathPrefix: "/wmtc",
}
