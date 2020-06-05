import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Info from '../components/info';
import Menu from '../components/menu/menu';
import Newsletter from '../components/newsletter';

import Hero from '../components/hero';

const Homepage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Hero />

    <Info />
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
