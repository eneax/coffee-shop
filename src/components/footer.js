import React from 'react';

const Footer = () => (
  <footer className="relative pt-8 pb-6 bg-gray-300">
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
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 className="text-lg mt-0 mb-2 text-gray-700">
            Join our newsletter and never miss out the latest news from us
          </h5>
          <div className="text-center mt-6">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: 'all 0.15s ease 0s;' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4">
      <hr className="my-6 border-gray-400" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-sm text-gray-600 font-semibold py-1">
            Copyright © {new Date().getFullYear()} Fairy Cake
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
