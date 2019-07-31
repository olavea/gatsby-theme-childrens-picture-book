import React from "react"
import useAudio from "../hooks/useAudio"

const AudioPlayer = () => {
  const audioFile = useAudio()

  return (
    audioFile && (
      <div
        style={{
          width: "100vw",
          height: "3em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <audio
          src={audioFile.publicURL}
          type="audio/mp3"
          controls
          style={{
            width: "90%",
            height: "2em",
          }}
        />
      </div>
    )
  )
}

AudioPlayer.propTypes = {}

export default AudioPlayer
