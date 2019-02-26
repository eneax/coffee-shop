import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'


const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  font-weight: 700;
`


const BackgroundSection = ({ img, styleClass, title, children }) => (
  <BackgroundImage
    className={styleClass}
    fluid={img}
  >
    <Title>{title}</Title>
    {children}
  </BackgroundImage>
)

export default BackgroundSection


BackgroundSection.defaultProps = {
  title: 'default title',
  styleClass: 'default background',
}
