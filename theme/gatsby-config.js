module.exports = ({ imagePath = "book/pictures", audioPath }) => {
  return {
    siteMetadata: {
      siteTitle: "@olavea/gatsby-theme-picture-book",
      siteDescription:
        "Make a Do-It-Yourself picture book together with a child you know.",
      siteLanguage: "en",
      author: "@olavea",
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: imagePath,
        },
      },
    ]
      .concat(
        audioPath
          ? {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `audio`,
                path: audioPath,
              },
            }
          : []
      )
      .concat([
        {
          resolve: `gatsby-plugin-layout`,
          options: {
            component: require.resolve(`./src/components/persistentLayout.js`),
          },
        },

        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
      ]),
  }
}
