import React from "react"

const PADDING = "calc(1rem + 1vw)"
const PADDING_BOTTOM = "calc(0.5rem + 1vw)"

const Audio = ({ audioFile }) => {
  return (
    <audio
      style={{
        position: "fixed",
        bottom: PADDING_BOTTOM,
        zIndex: 1000,
        margin: "auto",
        width: `calc(100vw - 2 * ${PADDING})`,
        height: "3em",
      }}
      src={audioFile.publicURL}
      type="audio/mp3"
      controls
    />
  )
}

export default Audio
