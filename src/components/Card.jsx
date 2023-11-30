import React from "react";


const Card = ({ cocktail }) => {

   



  return (
    <>
     <div className="card">
      <h3>{cocktail.strDrink}</h3>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
    </div>
    
    
    </>
    
   
    
  );
};

export default Card;
