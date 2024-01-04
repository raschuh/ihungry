import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getItemsByCategory() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + name);
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

    getItemsByCategory();
  }, []);

  return (
    <div>
      <h2>{name}</h2>
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

export default Category;