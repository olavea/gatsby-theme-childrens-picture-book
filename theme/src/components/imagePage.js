import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import SEO from "./seo"

const Page = ({ title, imageFile }) => {
  return (
    <>
      <SEO title={title} />

      <Img
        style={{
          maxHeight: "100%",
          position: "static",
        }}
        imgStyle={{ objectFit: "contain" }}
        fluid={imageFile.childImageSharp.fluid}
      />
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  imageFile: PropTypes.object,
  nextPage: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  previousPage: PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default Page
