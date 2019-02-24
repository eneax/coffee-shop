import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/bgSection"
import ContactForm from "../components/contact"


const Contact = ({ data }) => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.bgImg.childImageSharp.fluid}
      title='contact us'
      styleClass='about-background'
    />
    <ContactForm />
  </Layout>
)

export default Contact


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
