module.exports = ({ imagePath = "book/pictures", audioPath }) => {
  return {
    siteMetadata: {
      title: "@olavea/gatsby-theme-picture-book",
      description:
        "Make a Do-It-Yourself picture book together with a child you know.",
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
