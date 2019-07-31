/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-childrens-picture-book`,
      options: {
        imagePath: `./content/pics/`,
      },
    },
  ],
}
