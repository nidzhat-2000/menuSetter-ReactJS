import React, {
  useContext,
  createContext,
  useState,
  // useCallback,
  useEffect,
  useCallback,
} from 'react';

const urlByName = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchedValue, setSearchedValue] = useState('');
  const [cocktails, setCocktails] = useState([]);
  // const [error, setError] = useState(false);

  const fetchCocks = useCallback(async () => {
    setLoading(true);
    try {
      // setSearchedValue('az');
      const res = await fetch(`${urlByName} ${searchedValue}`);
      const data = await res.json();
      const { drinks } = data;
      // console.log(drinks);

      if (drinks) {
        const newCockList = drinks.map(cocktail => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            cocktail;

          return {
            cockID: idDrink,
            cockName: strDrink,
            cockImg: strDrinkThumb,
            cockInfo: strAlcoholic,
            cockGlass: strGlass,
          };

          /*
        const {
          idDrink: cockID,
          strDrink: cockName,
          strDrinkThumb: cockImg,
          strAlcoholic: cockInfo,
          strGlass: cockGlass,
        } = cocktail;

        return {
          cockID,
          cockName,
          cockImg,
          cockInfo,
          cockGlass,
        };
        */
        });
        // console.log(cocktails);
        setCocktails(newCockList);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
    // console.log(drinks);
  }, [searchedValue]);

  useEffect(() => {
    fetchCocks();
  }, [searchedValue]);
  // }, [searchedValue, fetchCocks]);

  return (
    <AppContext.Provider
      value={{
        setSearchedValue,
        searchedValue,
        loading,
        setLoading,
        cocktails,
        setCocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
