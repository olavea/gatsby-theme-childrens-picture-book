import React from "react"
import { Link } from "gatsby"

const PageFlipper = ({ nextPage, previousPage }) => {
  return (
    <nav
      style={{
        width: "100vw",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        top: 0,
        left: 0,
        zIndex: 1000,
        fontSize: "calc(1rem + 1vw * 1.5)",
        fontWeight: "bold",
      }}
    >
      {previousPage && (
        <Link
          style={{
            width: "50%",
            marginRight: "auto",
            textDecoration: "none",
            padding: "calc(0.5rem + 1vw * 1.5)",
          }}
          to={`${previousPage.path}`}
          rel="prev"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              width: "2em",
              height: "2em",
              opacity: "0.6",
            }}
          >
            ←
          </div>
        </Link>
      )}
      {nextPage && (
        <Link
          style={{
            width: "50%",
            marginLeft: "auto",
            textAlign: "right",
            textDecoration: "none",
            padding: "calc(0.5rem + 1vw * 1.5)",
          }}
          to={`${nextPage.path}`}
          rel="next"
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100%",
              borderColor: "pink",
              borderWidth: "calc(2px + 1vw * 0.2)",
              borderStyle: "solid",
              width: "2em",
              height: "2em",
            }}
          >
            →
          </div>
        </Link>
      )}
    </nav>
  )
}

export default PageFlipper
