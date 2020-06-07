import React from 'react';

const Newsletter = () => (
  <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: '80px', transform: 'translateZ(0px)' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-white fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <h2>Join our newsletter</h2>

        {/* Begin MailChimp Signup Form */}
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
                  style={{ border: '1px solid rgb(255, 158, 9)' }}
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </div>
            </div>
          </form>
        </div>
        {/* End MailChimp Signup Form */}
      </div>
    </div>
  </section>
);

export default Newsletter;
