import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Card = ({ id, image, title, description, price }) => (
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
        <p className="text-md font-light mt-2">{description.description}</p>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-4 mb-2">
          ${price.toFixed(2)}
        </span>
      </blockquote>
    </div>
  </div>
);

Card.propTypes = {};

export default Card;
