import { graphql, useStaticQuery } from "gatsby"

const useAudio = () => {
  // Fetch the first available audio file
  const data = useStaticQuery(graphql`
    query audioWrapperQuery {
      file(sourceInstanceName: { eq: "audio" }) {
        publicURL
      }
    }
  `)

  return data.file
}

export default useAudio
