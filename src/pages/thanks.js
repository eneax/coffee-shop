import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Thanks = () => (
  <Layout>
    <SEO title="Thanks" />

    <div
      className="flex items-center bg-gray-900 text-white"
      style={{ minHeight: 'calc(100vh - 10rem)' }}
    >
      <div className="mx-auto">
        <h1 className="text-white font-semibold text-5xl">Thank You!</h1>
        <p className="text-md font-light mt-2">
          Your form submission has been received
        </p>
        <Link to="/" className="font-bold text-gray-100 mt-8">
          <span className="flex items-center">&#x2190; Back home</span>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Thanks;
