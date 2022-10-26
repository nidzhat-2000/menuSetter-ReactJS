import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const DetailsOfCock = () => {
  const { id } = useParams();
  const urlByID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getCockById = async () => {
      try {
        const res = await fetch(`${urlByID}${id}`);
        const data = await res.json();
        const { drinks } = data;
        console.log(drinks[0]);
        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCock = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };

          /*
          const {
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strCategory,
            strGlass,
            strInstructions: strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCock = {
            cockName: strDrink,
            cockImg: strDrinkThumb,
            cockInfo: strAlcoholic,
            cockGlass: strGlass,
            cockCat: strCategory,
          };
          */
          setCocktail(newCock);
          console.log(newCock);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    getCockById();
  }, [id]);

  // const {

  // }

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2>unf there is no cock like this </h2>;
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <img src={image} alt={name} />
      <p>
        <span className="drink-data">name: </span>
        {name} <br />
        <span className="drink-data">info: </span>
        {info} <br />
        <span className="drink-data">category: </span>
        {category} <br />
        <span className="drink-data">glass: </span>
        {glass} <br />
        <span className="drink-data">instructions: </span>
        {instructions}
      </p>
      <p>
        <span className="drink-data">ingredients: </span>
        {ingredients.map((ingredient, index) => {
          return ingredient ? <span key={index}> {ingredient}</span> : null;
        })}
      </p>
    </section>
  );
};

export default DetailsOfCock;
