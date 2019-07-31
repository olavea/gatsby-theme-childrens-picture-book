import { useEffect } from "react"

const useKeyNavigation = ({ nextPage, previousPage }, onNavigate) => {
  const handleKeyStroke = e => {
    console.log(e)
    if (e.keyCode === 37 && previousPage) {
      console.log(previousPage)
      onNavigate(previousPage.path)
    }

    if (e.keyCode === 39 && nextPage) {
      onNavigate(nextPage.path)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyStroke)

    return () => {
      window.removeEventListener("keydown", handleKeyStroke)
    }
  })
}

export default useKeyNavigation
