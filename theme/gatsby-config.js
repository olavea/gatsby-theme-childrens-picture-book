module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `./content/audio/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./content/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/audioWrapper.js`),
      },
    },
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
