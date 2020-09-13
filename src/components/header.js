import React from 'react';
import { Link } from 'gatsby';
import { FiCoffee } from 'react-icons/fi';

import Cart from './cart';

const Header = () => (
  <header className="text-gray-500 bg-transparent top-0 absolute z-50 w-full">
    <div className="container flex justify-between mx-auto p-5">
      <Link
        to="/"
        className="flex font-medium items-center text-white mb-4 md:mb-0 hover:cursor-pointer"
      >
        <FiCoffee className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
        <span className="ml-3 text-xl">Fairy Cake</span>
      </Link>

      <Cart />
    </div>
  </header>
);

export default Header;
