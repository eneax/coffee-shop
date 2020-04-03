import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

import { Title } from '../elements';
import { fluidObject } from '../utils';

const BackgroundSection = ({ img, title, styleClass, children }) => {
  console.log(children);

  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <Title>{title}</Title>
      {children}
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
