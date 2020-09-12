import React from 'react';

// MailChimp Signup Form
const Newsletter = () => (
  <>
    <link
      href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <div id="mc_embed_signup">
      <form
        style={{ textAlign: 'center', padding: '10px 0 10px 0%' }}
        action="https://coolwebsite.us12.list-manage.com/subscribe/post?u=d85f808a9af64d58bbb1fa212&amp;id=a2fef2579b"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        rel="noopener noreferrer"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          {/* Do not remove this or risk form bot signups */}
          <div
            style={{
              position: 'absolute',
              left: '-5000px',
              ariaHidden: 'true',
            }}
          >
            <input
              type="text"
              name="b_d85f808a9af64d58bbb1fa212_a2fef2579b"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  </>
);

export default Newsletter;
