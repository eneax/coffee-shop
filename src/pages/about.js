import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/bgSection"
import Info from "../components/info"


const About = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.bgImg.childImageSharp.fluid}
      title='about us'
      styleClass='about-background'
    />
    <Info />
  </Layout>
)

export default About


export const query = graphql`
  {
    bgImg:file(relativePath: {eq: "about-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
