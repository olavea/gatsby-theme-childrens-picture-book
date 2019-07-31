import React from "react"

import useAudio from "../hooks/useAudio"

import Audio from "./ui/audio"

const AudioPlayer = () => {
  const audioFile = useAudio()

  return audioFile && <Audio audioFile={audioFile} />
}

AudioPlayer.propTypes = {}

export default AudioPlayer
