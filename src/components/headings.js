import React from 'react';

export const HeadingOne = ({ header }) => (
  <div className="row">
    <div className="col text-center mb-3">
      <h1 className="display-4 text-capitalize font-weight-bold">{header}</h1>
    </div>
  </div>
);

export const HeadingTwo = ({ header }) => (
  <div className="row">
    <div className="col text-center mb-3">
      <h1 className="display-5 text-capitalize font-weight-bold">{header}</h1>
    </div>
  </div>
);
