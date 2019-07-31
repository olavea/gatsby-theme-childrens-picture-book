import React from "react"

import Button from "./ui/button"

const PageFlipper = ({ previousPage, nextPage }) => {
  const prevNavItem = previousPage && {
    label: "←",
    url: previousPage.path,
    rel: "prev",
  }

  const nextNavItem = nextPage && {
    label: "→",
    url: nextPage.path,
    rel: "next",
  }

  return (
    <>
      {prevNavItem && <Button {...prevNavItem} />}
      {nextNavItem && <Button {...nextNavItem} />}
    </>
  )
}

export default PageFlipper
