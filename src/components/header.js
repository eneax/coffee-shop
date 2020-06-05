import React from 'react';
import { Link } from 'gatsby';

import { FiCoffee, FiShoppingBag } from 'react-icons/fi';

const navItems = ['About', 'Contact', 'Shop'];

const Header = () => (
  <header className="text-gray-500 bg-transparent top-0 absolute z-50 w-full">
    <div className=" container flex mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link
        to="/"
        className="flex font-medium items-center text-white mb-4 md:mb-0 hover:cursor-pointer"
      >
        <FiCoffee className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
        <span className="ml-3 text-xl">Fairy Cake</span>
      </Link>

      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {navItems.map(item => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="mr-5 hover:text-white"
          >
            {item}
          </Link>
        ))}

        <FiShoppingBag className="w-4 h-4 ml-1 hover:cursor-pointer snipcart-checkout" />
      </nav>
    </div>
  </header>
);

export default Header;
