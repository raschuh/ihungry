import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
  }, [id]); 

  return (
    <div className='text-lg'>
      <h1>{meal.str}</h1>
      <img src={meal.image} alt={meal.str} />
      <h2>Ingredients</h2>
      <ul className='list-disc list-inside'>
      {
        meal.ingredients?.map(ingredient => <li>{ingredient}</li>)
      }
      </ul>
      <h2>Instructions</h2>
      {
        meal.instructions?.map(step => <p>{step}</p>)
      }
    </div>
  );
}

export default Meal;