import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const audioWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query audioWrapperQuery {
        file(sourceInstanceName: { eq: "audio" }) {
          publicURL
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>

          <div
            style={{
              width: "100vw",
              position: "fixed",
              bottom: 0,
              left: 0,

              background: "pink",
            }}
          >
            <audio
              src={data.file.publicURL}
              type="audio/mp3"
              controls
              style={{
                width: "90%",
                margin: "1em 5vw",
              }}
            />
          </div>
        </div>
      </>
    )}
  />
)

audioWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default audioWrapper

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

/** line 39
<Header siteTitle={data.site.siteMetadata.title} />

line 54
<footer>
© {new Date().getFullYear()}, Homemade by hand with
{` `}
<a href="https://www.gatsbyjs.org">
  Children's Picture Book Gatsby Theme
</a>
</footer>
*/
