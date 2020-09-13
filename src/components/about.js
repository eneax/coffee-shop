import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FiTarget, FiHeart, FiAward } from 'react-icons/fi';

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
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <FiTarget />
                </div>
                <h6 className="text-xl font-semibold">Tasting</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  You and your special someone are invited to sample our cake
                  flavors and share with us your vision.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <FiHeart />
                </div>
                <h6 className="text-xl font-semibold">Design Process</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  We’ll work side by side to design a cake you love, and then
                  begin turning your vision into reality.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <FiAward />
                </div>
                <h6 className="text-xl font-semibold">The Big Day</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Finally, enjoy an edible work of art made especially for you
                  and your guests. Make sure to get a slice!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              About us
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Fairy Cake began in 2008 as a small shop with less than a dozen
              products and has quickly grown to be an industry leading baking
              supply company featuring vintage inspired baking and party
              supplies.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              We are a small town Wisconsin business with a strong background in
              art, design, business, baking, and party planning. We are very
              much inspired by beautiful vintage, great design, gorgeous color,
              and classic patterns.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              We have been featured in such publications as Country Living,
              Martha Stewart Living, Martha Stewart Weddings, Brides Magazine,
              BUST Magazine, InStyle Magazine, Woman's Day Magazine, Sandra Lee
              Semi-Homemade Magazine, and more.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mt-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-500">
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
                    className="text-blue-500 fill-current"
                  />
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Top Notch Service
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  When it comes to designing your cake, every small detail
                  matters.
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
