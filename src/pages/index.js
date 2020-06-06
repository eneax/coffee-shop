import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import About from '../components/about';
import Menu from '../components/menu/menu';
import Newsletter from '../components/newsletter';

const Homepage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <About />

    <Menu items={data.menu} />
    <Newsletter />
  </Layout>
);

export default Homepage;

export const query = graphql`
  {
    menu: allContentfulCoffeeItem(sort: { fields: createdAt }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
