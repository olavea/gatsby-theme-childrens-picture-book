import React from "react"

import Button from "./ui/button"

const PageFlipper = ({ previousPage, nextPage, infoLink }) => {
  const infoNavItem = infoLink &&
    infoLink.url && {
      label: infoLink.label || "i",
      title: infoLink.title || "info",
      url: infoLink.url,
    }

  const prevNavItem = previousPage
    ? {
        label: "←",
        title: previousPage.title,
        url: previousPage.path,
        rel: "prev",
      }
    : infoNavItem

  const nextNavItem = nextPage
    ? {
        label: "→",
        title: nextPage.title,
        url: nextPage.path,
        rel: "next",
      }
    : infoNavItem

  return (
    <>
      {prevNavItem && <Button {...prevNavItem} position={"left"} />}
      {nextNavItem && <Button {...nextNavItem} position={"right"} />}
    </>
  )
}

export default PageFlipper
