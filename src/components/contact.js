import React from 'react';

const Contact = () => (
  <>
    <section className="pb-20 relative block bg-gray-900">
      <div className="container mx-auto pt-24 px-4 pb-12 lg:pb-56">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">Contact us</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              Complete this form and we will get back to you in 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="relative block py-24 lg:pt-0 bg-gray-900">
      <div className="container mx-auto px-4 pb-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-8">
                <form
                  name="contact-us"
                  method="POST"
                  action="thanks"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold"
                      htmlFor="full-name"
                    >
                      Full Name
                      <input
                        type="text"
                        className="mt-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        style={{ transition: 'all 0.15s ease 0s' }}
                      />
                    </label>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold"
                      htmlFor="email"
                    >
                      Email
                      <input
                        type="email"
                        className="mt-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        name="email"
                        id="email"
                        placeholder="Email"
                        style={{ transition: 'all 0.15s ease 0s' }}
                      />
                    </label>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold"
                      htmlFor="message"
                    >
                      Message
                      <textarea
                        rows="4"
                        cols="80"
                        name="message"
                        id="message"
                        placeholder="Type a message..."
                        className="mt-2 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      />
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: 'all 0.15s ease 0s' }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
