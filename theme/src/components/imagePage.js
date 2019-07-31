import React from "react"
import PropTypes from "prop-types"

import SEO from "./seo"

import Image from "./ui/image"

const Page = ({ title, imageFile }) => {
  return (
    <>
      <SEO title={title} />

      <Image fluidImage={imageFile.childImageSharp.fluid} />
    </>
  )
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  imageFile: PropTypes.object.isRequired,
}

export default Page
