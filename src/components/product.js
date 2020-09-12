import React from 'react';
import Img from 'gatsby-image';

const Product = ({ product: { image, title, price, id } }) => (
  <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
      <Img
        fluid={image.fluid}
        alt={`${title}`}
        className="w-full align-middle rounded-t-lg object-cover h-64"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block"
          style={{ height: '95px', top: '-94px' }}
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-white fill-current"
          />
        </svg>
        <h4 className="text-xl font-bold ">{title}</h4>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-4 mb-2">
          ${price.toFixed(2)}
        </span>
      </blockquote>
      <button
        type="button"
        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-8 cursor-pointer snipcart-add-item"
        data-item-id={id}
        data-item-name={title}
        data-item-price={price}
        data-item-image={image.fluid.src}
        data-item-url="https://coffee-shop-x.netlify.com/"
      >
        Add to cart
      </button>
    </div>
  </div>
);

export default Product;
