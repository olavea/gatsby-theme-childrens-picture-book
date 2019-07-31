import React from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"

import useSwipeNavigation from "../hooks/useSwipeNavigation"

import Navigation from "./navigation"
import AudioPlayer from "./audioPlayer"

import Layout from "./ui/layout"

/*
 * This component is used by the gatsby-plugin-layout.
 *
 * We need the audio to keep on playing, even when we change pages
 * and therefore we use a persistent Layout. Instead of one included for every page.
 *
 */

const PersistentLayout = ({ children, pageContext }) => {
  const { nextPage, previousPage } = pageContext

  useSwipeNavigation({ nextPage, previousPage }, navigate)

  return (
    <Layout>
      <Navigation {...pageContext} />
      <AudioPlayer />
      {children}
    </Layout>
  )
}

PersistentLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PersistentLayout
