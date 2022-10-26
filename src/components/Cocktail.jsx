import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ cockID, cockName, cockImg, cockInfo, cockGlass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={cockImg} alt="cock-img" />
      </div>
      <h3>{cockName}</h3>
      <h4>{cockGlass}</h4>
      <p>{cockInfo}</p>
      <Link to={`/cocktail/${cockID}`}>details</Link>
    </article>
  );
};

export default Cocktail;
