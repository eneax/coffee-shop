import React from 'react'
import Title from './title'


const Contact = () => (
  <section className='contact py-5'>
    <Title title='contact us' />

    <div className='row'>
      <div className='col-10 col-sm-8 col-md-6 mx-auto'>
        <form action='https://formspree.io/eneaxharja@gmail.com' method='POST'>
          {/* name */}
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' className='form-control' name='name' id='name' placeholder='John Smith' />
          </div>
          {/* email */}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' className='form-control' name='email' id='email' placeholder='john.smith@example.com' />
          </div>
          {/* message */}
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' className='form-control' rows='5' placeholder='Drop us a line...'></textarea>
          </div>
          {/* submit button */}
          <button type='submit' className='btn btn-yellow btn-block text-capitalize mt-5'>Submit</button>
        </form>
      </div>
    </div>
  </section>
)

export default Contact
