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
    homepageYaml {
      homepage {
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

const Homepage = () => {
  const response = useStaticQuery(getHomeData);
  const {
    homepageYaml: {
      homepage: { hero },
    },
    menu,
  } = response;

  return (
    <Layout>
      <SEO title="Home" />

      <Hero {...hero} />
      <About />
      <Menu color="green" items={menu} />
      <Contact />
    </Layout>
  );
};

export default Homepage;
