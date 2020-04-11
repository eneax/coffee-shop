import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import Hero from './hero';

import { Title } from '../elements';
import { fluidObject } from '../utils';

const BackgroundSection = ({ img, title, styleClass, children }) => {
  console.log(children);

  return (
    <BackgroundImage className={styleClass} fluid={img} backgroundColor="red">
      <Hero />
    </BackgroundImage>
  );
};

BackgroundSection.propTypes = {
  img: fluidObject.isRequired,
  title: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BackgroundSection;
