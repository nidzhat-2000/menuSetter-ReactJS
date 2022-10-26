import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="err-cont">
      <p className="err-message"> Unf there is no cocktail like this one </p>
      <Link to="/">Back to home..</Link>
    </div>
  );
};

export default Error;
