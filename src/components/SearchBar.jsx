import React from 'react';
import { useGlobalContext } from '../context';

const SearchBar = () => {
  const { setSearchedValue } = useGlobalContext();

  return (
    <section className=" section search">
      <form action="" onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          name=""
          id=""
          onChange={e => {
            setSearchedValue(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default SearchBar;
