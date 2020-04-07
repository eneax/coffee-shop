import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import './bootstrap.min.css';
import './layout.css';
import Navbar from './navbar';
import Footer from './footer';
import { GlobalStyle } from './styles/globalStyles';

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
