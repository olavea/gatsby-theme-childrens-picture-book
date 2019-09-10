import { useEffect } from "react"

const useKeyNavigation = ({ nextPage, previousPage }, onNavigate) => {
  const LEFT_ARROW = 37
  const RIGHT_ARROW = 39
  const handleKeyStroke = e => {
    console.log(e)
    if (e.keyCode === LEFT_ARROW && previousPage) {
      console.log(previousPage)
      onNavigate(previousPage.path)
    }

    if (e.keyCode === RIGHT_ARROW && nextPage) {
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
