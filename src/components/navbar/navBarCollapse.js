import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import NavBarCollapseButton from './navBarCollapseButton';

const styles = theme => ({
  root: {
    position: 'absolute',
    right: 0,
  },
  navbarButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    margin: '10px',
    paddingLeft: '16px',
    right: 0,
    position: 'relative',
    width: '100%',
    background: 'transparent',
  },
  navbarButtonLink: {
    color: [theme.palette.text.primary],
    textDecoration: 'none',
    '&:hover': {
      color: [theme.palette.text.primary],
      textDecoration: 'none',
    },
  },
  navbarCollapseButtonLink: {
    color: [theme.palette.text.secondary],
    textDecoration: 'none',
    '&:hover': {
      color: [theme.palette.text.secondary],
      textDecoration: 'none',
    },
  },
  iconButton: {
    fill: [theme.palette.text.primary],
  },
});

const navbarItems = ['About Us', 'Contact', 'Shop'];

const NavBarCollapse = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.navbarButton} id="appbar-collapse">
      {navbarItems.map(navbarItem => (
        <Link
          className={classes.navbarButtonLink}
          to={`/${navbarItem.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <Button>{navbarItem}</Button>
        </Link>
      ))}

      <IconButton>
        <ShoppingCartIcon
          className={`${classes.iconButton} snipcart-checkout`}
        />
      </IconButton>
    </div>

    <NavBarCollapseButton>
      {navbarItems.map(navbarItem => (
        <Link
          className={classes.navbarCollapseButtonLink}
          to={`/${navbarItem.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <MenuItem>{navbarItem}</MenuItem>
        </Link>
      ))}
    </NavBarCollapseButton>
  </div>
);

NavBarCollapse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarCollapse);
