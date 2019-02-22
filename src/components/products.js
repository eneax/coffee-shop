import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Product from './product'
import Title from './title'


const PRODUCTS_QUERY = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight:426) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Products = () => (
  <StaticQuery 
    query={PRODUCTS_QUERY}
    render={(data) => (
      <section className='py-5'>
        <div className='container'>
          <Title title='our products' />
          <div className='row'>
            {data.products.edges.map(({ node:product }) => (
              <Product 
                key={product.id}
                product={product} // we pass the entire node to the product component
              />
            ))}
          </div>
        </div>
      </section>
    )}
  />
)

export default Products
