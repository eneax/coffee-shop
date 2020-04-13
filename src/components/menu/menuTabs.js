import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { fixedObject } from '../../utils';
import TabPanel from './menuTab';

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
              icon={<FavoriteIcon />}
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
      {coffeeItems.map(({ node }) => (
        <TabPanel key={node.id} value={value} index={value}>
          <Img fixed={node.image.fixed} />
          <span>{node.title}</span>
          <span>${node.price.toFixed(2)}</span>
          <small>{node.description.description}</small>
        </TabPanel>
      ))}
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
          img: fixedObject,
        }).isRequired,
      }).isRequired
    ),
  }),
};

export default ScrollableTabs;
