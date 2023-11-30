import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        
        // Tomar solo los primeros 20 elementos de la lista de cócteles
        const first20Cocktails = response.data.drinks.slice(0, 20);

        setCocktails(first20Cocktails);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {cocktails.map(cocktail => (
        <Card key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
