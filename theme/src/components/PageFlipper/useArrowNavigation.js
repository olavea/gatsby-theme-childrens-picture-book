import { useEffect } from 'react'

export default ({ nextPage, previousPage }, onNavigate) => {
  const handleKeyStroke = e => {
    if (e.keyCode === 37) {
      onNavigate(previousPage)
    }

    if (e.keyCode === 39) {
      onNavigate(nextPage)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyStroke)

    return () => {
      window.removeEventListener("keydown", handleKeyStroke)
    }
  })
}
