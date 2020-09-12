import React from 'react';
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
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px', transform: 'translateZ(0px)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Best Of Our Menu</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Enjoy the greatest menu ever made
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
                    className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                    key={category}
                  >
                    <span
                      role="button"
                      className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                        active === id
                          ? `text-white bg-${color}-600`
                          : `text-${color}-600 bg-white`
                      }`}
                      aria-hidden="true"
                      onClick={() => {
                        handleItems(category);
                        setActive(id);
                        console.log('category', category);
                        console.log('categories', categories);
                        console.log('check', coffeeItems.includes(category));
                      }}
                    >
                      {category}
                    </span>
                  </li>
                ))}
              </ul>

              {/* menu items */}
              <div className="relative flex flex-col min-w-0 w-full mb-6">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div className="flex flex-wrap">
                      {coffeeItems.map(({ node }) => (
                        <Card {...node} />
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

export default Menu;
