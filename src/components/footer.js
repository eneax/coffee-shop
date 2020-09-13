import React from 'react';

import Newsletter from './newsletter';

const Footer = () => (
  <footer className="relative pt-8 pb-6 bg-gray-300">
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-gray-700">
            Join our newsletter and never miss out the latest news from us
          </h5>
          <div className="text-center mt-6">
            <Newsletter />
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <hr className="my-6 border-gray-400" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-600 font-semibold py-1">
            Copyright © {new Date().getFullYear()} The Coffee Shop
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
