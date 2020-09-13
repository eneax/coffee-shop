import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import About from '../components/about';
import Menu from '../components/menu';
import Contact from '../components/contact';

const getHomeData = graphql`
  {
    menu: allContentfulCoffeeItem(sort: { fields: category, order: DESC }) {
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
              src # it's needed for Snipcart
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const Homepage = () => {
  const response = useStaticQuery(getHomeData);
  const { menu } = response;

  return (
    <Layout>
      <SEO title="Home" />

      <Hero />
      <About />
      <Menu color="gray" items={menu} />
      <Contact />
    </Layout>
  );
};

export default Homepage;
