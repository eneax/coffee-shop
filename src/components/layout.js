import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import defaultTheme from '../theme';
import './bootstrap.min.css';
import './layout.css';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />

    <Navbar />
    {children}
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
