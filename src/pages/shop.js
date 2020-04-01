import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/bgSection';
import Products from '../components/products';

const Shop = ({ data }) => (
  <Layout>
    <SEO title="Shop" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.bgImg.childImageSharp.fluid}
      title="Hand Roasted Coffee"
      styleClass="about-background"
    />
    <Products />
  </Layout>
);

export default Shop;

export const query = graphql`
  {
    bgImg: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
