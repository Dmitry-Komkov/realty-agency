/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from 'twin.macro'

import Header from "../modules/Header"
import Footer from "../modules/Footer"

const Default = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
