import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/bgSection"
import Info from "../components/info"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.bgImg.childImageSharp.fluid}
      title="joe's coffee shop"
      styleClass='default-background'
    />
    <Info />
  </Layout>
)

export default IndexPage


export const query = graphql`
  {
    bgImg:file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
