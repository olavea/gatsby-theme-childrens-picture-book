/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteTitle: `Petra Rabbit`,
    siteDescription: `Almost Beatrix Potter's Peter Rabbit. Narrated by Ola (41) and Lillian (4.5 🦄)`,
    siteLanguage: `en`,
    // Twitter Handle
    author: `@OlaHolstVea`,
  },
  plugins: [
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        imagePath: `./book/pics/`,
        audioPath: `./book/audio/`,
        infoLink: {
          title: "GitHub",
          url: `https://github.com/olavea/gatsby-theme-picture-book`,
        },
      },
    },
  ],
}
