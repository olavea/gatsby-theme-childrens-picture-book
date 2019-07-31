import React from "react"

import { PADDING_X, PADDING_Y } from "./theme"

const Layout = ({ children }) => {
  return (
    <main
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        height: `calc(100vh - 2 * ${PADDING_Y})`,
        width: `calc(100vw - 2 * ${PADDING_X})`,
        top: PADDING_Y,
        left: PADDING_X,
      }}
    >
      {children}
    </main>
  )
}

export default Layout
