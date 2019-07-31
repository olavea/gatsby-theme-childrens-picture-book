import React from "react"
import PropTypes from "prop-types"
import PageFlipper from "./pageFlipper"
import AudioPlayer from "./audioPlayer"

const PersistentWrapper = ({ children, pageContext }) => {
  return (
    <main
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        height: "90vh",
        width: "90vw",
        top: "5vw",
        left: "5vw",
      }}
    >
      <PageFlipper {...pageContext} />
      <AudioPlayer />
      {children}
    </main>
  )
}

PersistentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PersistentWrapper
