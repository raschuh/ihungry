import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Card from './Card';

function Ingredient() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getMealsByIngredient() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + name);
      const _meals = response.data['meals'];
      setMeals(
        _meals.map(meal => {
          return {
            id: meal['idMeal'],
            str: meal['strMeal'],
            image: meal['strMealThumb']
          }
        })
      );
    }

    getMealsByIngredient();
  }, [name]); 
  
  return (
    <div>
      <h1>{name.replace('_', ' ')}</h1>
      <div className='grid grid-cols-2 gap-2'>
      {
        meals.map(meal => {
          return (
            <Card 
              key={meal.id}
              to={`/meal/${meal.id}`}
              item={meal}
            />
          );
        })
      }
      </div>
    </div>
  );
}

export default Ingredient;
