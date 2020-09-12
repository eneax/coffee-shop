import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Products from '../components/products';

const getShopData = graphql`
  {
    shopYaml {
      shop {
        hero {
          bgImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mainHeading
          text
        }
      }
    }
  }
`;

const Shop = () => {
  const response = useStaticQuery(getShopData);
  const {
    shopYaml: {
      shop: { hero },
    },
  } = response;

  return (
    <Layout>
      <SEO title="Shop" />

      <Hero {...hero} />
      <Products />
    </Layout>
  );
};

export default Shop;
