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
            <div className='row mb-5'>
              <div className='col-10'>
                <h1>these are our items</h1>
              </div>
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
