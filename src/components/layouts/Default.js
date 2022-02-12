/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "../modules/header/Header"
import GlobalStyles from '../../styles/GlobalStyles';
import Footer from '../modules/footer/Footer';

const Default = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
