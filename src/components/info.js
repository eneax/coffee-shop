import React from 'react'
import { Link } from 'gatsby'
import Title from './title'

const Info = () => (
  <section className='py-5'>
    <div className='container'>
      <div className='col-10 col-sm-8 mx-auto text-center'>
        <Title title='our story' />
        <p className='lead text-muted mb-5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum quae accusamus sunt odio, eligendi natus dolorem adipisci dolore quo facere delectus minima molestiae, nihil quos eveniet? Eveniet, perspiciatis tenetur.
        </p>
        <Link to='/about'>
          <button className='btn text-uppercase btn-yellow'>
            About
          </button>
        </Link>
      </div>
    </div>
  </section>
)

export default Info
