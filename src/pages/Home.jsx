import React from 'react';
import CocktailsList from '../components/CocktailsList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <main>
      <SearchBar />
      <CocktailsList />
    </main>
  );
};

export default Home;
