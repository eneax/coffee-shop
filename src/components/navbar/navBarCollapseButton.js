import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
  buttonCollapse: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  iconButton: {
    fill: [theme.palette.text.primary],
  },
});

const NavbarCollapseButton = ({ children, classes }) => {
  const [anchorEl, setAnchorEl] = useState('');

  const handleMenu = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <div className={classes.buttonCollapse}>
      <IconButton>
        <ShoppingCartIcon
          className={`${classes.iconButton} snipcart-checkout`}
        />
      </IconButton>

      <IconButton onClick={handleMenu}>
        <MenuIcon className={classes.iconButton} />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </div>
  );
};

NavbarCollapseButton.propTypes = {
  children: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarCollapseButton);
