import React from 'react';
import { useGlobalContext } from '../context';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailsList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2>We have no cocktail like this</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-centers">
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.cockID} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailsList;
