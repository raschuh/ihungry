import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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
  }, []); 
  
  return (
    <div>
      <h2>{name.replace('_', ' ')}</h2>
      {
        meals.map(meal => {
          return (
            <Link 
              key={meal.id}
              to={`/meal/${meal.id}`}
            >
              <img src={meal.image} />
              <p>{meal.str}</p>
            </Link>
          );
        })
      }
    </div>
  );
}

export default Ingredient;