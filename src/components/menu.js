import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

const getCategories = items => {
  const temporaryItems = items.map(tempItems => tempItems.node.category);
  const tempCategories = new Set(temporaryItems);
  let categories = Array.from(tempCategories);

  categories = ['all', ...categories];
  return categories;
};

const Menu = ({ color, items }) => {
  const [active, setActive] = React.useState(0);
  const [coffeeItems, setCoffeeItems] = React.useState(items.edges);

  const handleItems = category => {
    const tempItems = items.edges;

    return category === 'all'
      ? setCoffeeItems(tempItems)
      : setCoffeeItems(
          tempItems.filter(({ node }) => node.category === category)
        );
  };

  const categories = getCategories(items.edges);

  return (
    <>
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-12 lg:mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Best Of Our Menu</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Enjoy the greatest menu of all time
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full">
              {/* categories */}
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                {categories.map((category, id) => (
                  <li
                    className="mt-2 -mb-px mr-2 last:mr-0 flex-auto text-center"
                    key={category}
                  >
                    <span
                      role="button"
                      className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                        active === id
                          ? `text-white bg-${color}-700`
                          : `text-${color}-700 bg-white`
                      }`}
                      aria-hidden="true"
                      onClick={() => {
                        handleItems(category);
                        setActive(id);
                      }}
                    >
                      {category}
                    </span>
                  </li>
                ))}
              </ul>

              {/* menu items */}
              <div className="relative flex flex-col min-w-0 w-full mb-6">
                <div className="py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div className="flex flex-wrap">
                      {coffeeItems.map(({ node: { id }, node }) => (
                        <Card {...node} key={id} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Menu.propTypes = {
  color: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
};

export default Menu;
