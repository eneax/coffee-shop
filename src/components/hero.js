import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const getHeroData = graphql`
  {
    bgImg: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const response = useStaticQuery(getHeroData);
  const { bgImg } = response;

  return (
    <BackgroundImage fluid={bgImg.childImageSharp.fluid}>
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-75 bg-black"
      />
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: '75vh' }}
      >
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl">
                  Coffee Ipsum
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Welcome to The Coffee Shop - Macchiato acerbic est caffeine a
                  roast acerbic french press a, cup kopi-luwak instant barista
                  saucer crema instant caffeine aroma decaffeinated.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: '70px', transform: 'translateZ(0px)' }}
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
      </div>
    </BackgroundImage>
  );
};

export default Hero;
