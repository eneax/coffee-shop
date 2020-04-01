import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/bgSection';
import Info from '../components/info';
import Menu from '../components/menu';
import Newsletter from '../components/newsletter';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.bgImg.childImageSharp.fluid}
      title="welcome to joe's"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Newsletter />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    bgImg: file(relativePath: { eq: "default-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;
