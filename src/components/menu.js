import React, { Component } from 'react'
import Img from 'gatsby-image'
import Title from './title'


export default class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.items.edges,
      coffeeItem: props.items.edges
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <section className='menu py-5'>
          <div className='container'>
            <Title title='best of our menu' />
            {/* categories */}
            {/* items */}
            <div className='row'>
              {this.state.coffeeItem.map(({ node }) => (
                <div key={node.id} className='col-11 col-md-6 my-3 d-flex mx-auto'>
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  {/* items */}
                  <div className='flex-grow-1 px-3'>
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className='menu py-5'>
          <div className='container'>
            <Title title='best of our menu' />
            <div className='row'>
              <div className='col-10 col-sm-6 mx-auto text-center'>
                <h1>There are no items to display!</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
