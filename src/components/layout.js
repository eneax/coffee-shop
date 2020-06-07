import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
