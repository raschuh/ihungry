import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Meal() {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  useEffect(() => {
    async function getMealById() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
      const _meal = response.data['meals'][0];
      setMeal(() => {
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
          const strIngredient = `strIngredient${i}`;
          const strMeasure = `strMeasure${i}`;

          if (_meal[strIngredient] === null || _meal[strIngredient] === "") break;
          ingredients.push(`${_meal[strMeasure]} ${_meal[strIngredient]}`);
        }

        return {
          id: _meal['idMeal'],
          str: _meal['strMeal'],
          image: _meal['strMealThumb'],
          ingredients: ingredients,
          instructions: _meal['strInstructions'].split('\r\n')
        }
      });
    }

    getMealById();
  }, []); 

  return (
    <div>
      <h2>{meal.str}</h2>
      <img src={meal.image} style={{width: '100%'}}/>
      <h3>Ingredients</h3>
      <ul>
      {
        meal.ingredients?.map(ingredient => <li>{ingredient}</li>)
      }
      </ul>
      <h3>Instructions</h3>
      {
        meal.instructions?.map(step => <p>{step}</p>)
      }
    </div>
  );
}

export default Meal;