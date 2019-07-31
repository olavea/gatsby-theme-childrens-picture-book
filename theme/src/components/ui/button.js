import React from "react"
import { Link } from "gatsby"

import { PADDING_X, BRAND_COLOR } from "./theme"

const Button = ({ label, url, rel }) => {
  return (
    <Link
      style={{
        position: "fixed",
        top: PADDING_X,
        right: rel === "next" && PADDING_X,
        left: rel === "prev" && PADDING_X,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        width: "2em",
        height: "2em",
        justifyContent: "center",
        borderRadius: "100%",
        borderWidth: "0.2rem",
        borderColor: rel === "next" ? BRAND_COLOR : "transparent",
        borderStyle: "solid",
        fontSize: "calc(1rem + 1.5vw)",
        textDecoration: "none",
      }}
      to={url}
      rel={rel}
    >
      {label}
    </Link>
  )
}

export default Button
