import React from "react"

import Img from "gatsby-image"

const Image = ({ fluidImage }) => {
  return (
    <Img
      style={{
        maxHeight: "100%",
        position: "static",
      }}
      imgStyle={{ objectFit: "contain" }}
      fluid={fluidImage}
    />
  )
}

export default Image
