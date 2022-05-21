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
import ModalForm from "../modules/ModalForm";
import {useSelector} from "react-redux";

const Default = ({ children }) => {
  const state = useSelector(state => state.modalForm.show)

  return (
    <>
      <GlobalStyles state={state} />
      <Header />
      <main>{children}</main>
      <ModalForm />
      <Footer />
    </>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
