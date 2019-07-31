import React from "react"
import { graphql, navigate } from "gatsby"
import ImagePage from "../components/imagePage"
import useKeyNavigation from "../hooks/useKeyNavigation"
import useSwipeNavigation from "../hooks/useSwipeNavigation"

const ImagePageTemplate = ({ data: { file }, pageContext }) => {
  const { nextPage, previousPage } = pageContext

  useKeyNavigation({ nextPage, previousPage }, navigate)
  useSwipeNavigation({ nextPage, previousPage }, navigate)

  return <ImagePage {...pageContext} imageFile={file} />
}

export const query = graphql`
  query ImagePageQuery($imageFileName: String!) {
    file(name: { eq: $imageFileName }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`

export default ImagePageTemplate
