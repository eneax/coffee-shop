import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ScrollableTabs from './menuTabs';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Menu = ({ items }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Best Of Our Menu
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Some random paragraph to add more info about the menu
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <ScrollableTabs menu={items} />
      </Container>
    </>
  );
};

Menu.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Menu;
