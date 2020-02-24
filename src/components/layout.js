import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"
import Navbar from './navbar'
import Footer from './footer'
import { GlobalStyle } from '../components/styles/globalStyles'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <GlobalStyle />
    { children }
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
