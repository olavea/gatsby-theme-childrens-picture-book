import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PageFlipper from "../components/PageFlipper"
import SEO from "../components/seo"

export default class postLayout extends Component {
  render() {
    const { file } = this.props.data

    return (
      <>
        <SEO />
        <title titleProp={file.name} />
        <PageFlipper
          pageNumberProp={file.name}
          tagline="Wes (& Scott) Are Cool"
        />
        <Img fluid={file.childImageSharp.fluid} />
      </>
    )
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    file(name: { eq: $slug }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          src
        }
      }
      name
    }
  }
`
