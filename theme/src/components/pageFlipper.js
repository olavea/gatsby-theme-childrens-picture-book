import React, { useEffect } from "react"

import { Link, navigate } from "gatsby"

const PageFlipper = ({ nextPage, previousPage }) => {
  useEffect(() => {
    // Update the document title using the browser API
    window.addEventListener("keydown", () => {
      console.log("key is down")
    })
  })

  return (
    <ul
      style={{
        background: `pink`,
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,

        margin: 0,
        marginBottom: 0,
      }}
    >
      <li>
        {previousPage && (
          <Link to={`/${previousPage.path}`} rel="prev">
            ← {previousPage.title}
          </Link>
        )}
      </li>
      <li>
        {nextPage && (
          <Link to={`/${nextPage.path}`} rel="next">
            {nextPage.title} →
          </Link>
        )}
      </li>
    </ul>
  )
}

export default PageFlipper
