import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../images/logo.png';
import { HideOnScroll } from '../../utils';
import NavBarCollapse from './navBarCollapse';

const styles = {
  logo: {
    width: 160,
    height: 45,
  },
};

const NavBar = ({ classes }, props) => (
  <HideOnScroll {...props}>
    <AppBar>
      <Toolbar>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="Company Logo" />
        </Link>

        <NavBarCollapse />
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
