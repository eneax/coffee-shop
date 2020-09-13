import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div
      className="flex items-center bg-gray-900 text-white"
      style={{ minHeight: 'calc(100vh - 10rem)' }}
    >
      <div className="mx-auto">
        <h1 className="text-white font-semibold text-5xl">NOT FOUND</h1>
        <Link to="/" className="font-bold text-gray-100 mt-8">
          <span className="flex items-center">Back home &#8594;</span>
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
