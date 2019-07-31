import React from "react"
import { Link } from "gatsby"

const PageFlipper = ({ nextPage, previousPage }) => {
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
          <Link to={`${previousPage.path}`} rel="prev">
            ← {previousPage.title}
          </Link>
        )}
      </li>
      <li>
        {nextPage && (
          <Link to={`${nextPage.path}`} rel="next">
            {nextPage.title} →
          </Link>
        )}
      </li>
    </ul>
  )
}

export default PageFlipper
