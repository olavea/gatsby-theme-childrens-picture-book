import React from "react"
import { Link } from "gatsby"

import { PADDING_X, BRAND_COLOR } from "./theme"

const Button = ({ label, title, url, rel, position }) => {
  const internal = /^\/(?!\/)/.test(url)

  const style = {
    position: "fixed",
    top: PADDING_X,
    right: position === "right" && PADDING_X,
    left: position === "left" && PADDING_X,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    width: "2em",
    height: "2em",
    justifyContent: "center",
    borderRadius: "100%",
    borderWidth: "0.2rem",
    borderColor: BRAND_COLOR,
    borderStyle: "solid",
    fontSize: "calc(1rem + 1.5vw)",
    textDecoration: "none",
    opacity: position === "right" ? 1 : 0.6,
  }

  return internal ? (
    <Link style={style} title={title} to={url} rel={rel}>
      {label}
    </Link>
  ) : (
    <a
      style={style}
      title={title}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}

export default Button
