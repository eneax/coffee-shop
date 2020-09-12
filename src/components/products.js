import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Product from './product';

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src # it's needed for Snipcart
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const Products = () => {
  const response = useStaticQuery(getProducts);
  const { products } = response;

  return (
    <section className="relative py-20">
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-12 lg:mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Best Of Our Menu</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Enjoy the best products in town!
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="relative flex flex-col min-w-0 w-full mb-6">
              <div className="py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className="flex flex-wrap">
                    {products.edges.map(({ node: product }) => (
                      <Product key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
