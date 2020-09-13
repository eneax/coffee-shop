import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutUsPic: file(relativePath: { eq: "about-us.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const aboutUsPic = data.aboutUsPic.childImageSharp.fluid;

  return (
    <section className="py-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              About Us
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Aged as java, blue mountain cinnamon doppio, qui con panna
              robusta, milk et trifecta, foam to go, crema dripper ristretto
              iced dripper est black, coffee sit latte to go seasonal extraction
              flavour, at strong grinder seasonal blue mountain decaffeinated.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              Caffeine whipped skinny, strong instant at skinny, whipped foam
              aroma medium cinnamon percolator cup saucer, single shot, instant
              shop extra iced blue mountain mug a, aromatic cultivar, americano
              aroma body filter cup strong chicory french press.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              Cup caramelization sweet barista, medium white, at, flavour,
              mazagran grounds robust, siphon that crema, percolator black latte
              dark, blue mountain, aroma americano breve con panna white
              kopi-luwak pumpkin spice qui aftertaste spoon mocha caffeine extra
              aromatic.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mt-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-900">
              <Img
                fluid={aboutUsPic}
                alt="About Us Image"
                className="w-full align-middle rounded-t-lg"
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
                    className="text-gray-900 fill-current"
                  />
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Top Notch Service
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  Beans cream doppio, lungo pumpkin spice, mazagran, bar shop
                  cortado, froth blue mountain doppio, java cultivar, bar
                  plunger pot latte dark cup redeye java bar steamed viennese
                  iced.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
