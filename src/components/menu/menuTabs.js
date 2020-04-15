import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { fluidObject, menuIcons } from '../../utils';
import TabPanel from './menuTab';
import Card from '../card';

// utils
const getCategories = items => {
  const temporaryItems = items.map(tempItems => tempItems.node.category);

  const tempCategories = new Set(temporaryItems);
  let categories = Array.from(tempCategories);

  categories = ['all', ...categories];
  return categories;
};

const a11yProps = index => ({
  id: `scrollable-force-tab-${index}`,
  'aria-controls': `scrollable-force-tabpanel-${index}`,
});

// styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.primary,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

// main component
const ScrollableTabs = ({ menu }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [menuItems] = useState(menu.edges);
  const [coffeeItems, setCoffeeItems] = useState(menu.edges);

  const handleItems = category => {
    const tempItems = menu.edges;

    return category === 'all'
      ? setCoffeeItems(tempItems)
      : setCoffeeItems(
          tempItems.filter(({ node }) => node.category === category)
        );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const categories = getCategories(menu.edges);

  return menuItems.length > 0 ? (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        {/* categories */}
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="Scrollable Tabs"
        >
          {categories.map((category, id) => (
            <Tab
              key={id}
              icon={menuIcons[category]}
              label={category}
              onClick={() => {
                handleItems(category);
              }}
              {...a11yProps(id)}
            />
          ))}
        </Tabs>
      </AppBar>

      {/* menu items */}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {coffeeItems.map(({ node }) => (
            <Grid item key={node.id} xs={12} sm={6} md={4}>
              <TabPanel value={value} index={value}>
                <Card
                  img={node.image.fluid}
                  title={node.title}
                  price={node.price}
                  description={node.description.description}
                />
              </TabPanel>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  ) : (
    <p>There are no items to display!</p>
  );
};

ScrollableTabs.propTypes = {
  menu: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.shape({
            description: PropTypes.string.isRequired,
          }),
          price: PropTypes.number.isRequired,
          category: PropTypes.string.isRequired,
          img: fluidObject,
        }).isRequired,
      }).isRequired
    ),
  }),
};

export default ScrollableTabs;
