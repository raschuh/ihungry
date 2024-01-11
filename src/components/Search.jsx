import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from './Card';

function Search() {
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(ingredients);

  useEffect(() => {
    async function getIngredients() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const ingredients = response.data['meals'];
      setIngredients(
        ingredients.map(item => {
          return {
            id: item['idIngredient'], 
            str: item['strIngredient']
          }
        })
      );
    }

    getIngredients();
  }, []);

  useEffect(() => {
    async function getCategories() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      const categories = response.data['categories'];
      setCategories(
        categories.map(item => {
          return {
            id: item['idCategory'],
            str: item['strCategory'],
            image: item['strCategoryThumb']
          }
        }).sort((a, b) => a.str > b.str)
      );
    }

    getCategories();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = ingredients.filter(item =>
      item.str.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      <h2>Search by Ingredient</h2>
      <input 
        type='text' 
        placeholder='Type an ingredient here...' 
        value={searchTerm} 
        onChange={handleSearch}
        className='bg-white border w-full p-2 mb-2'
      />
      <ul className='max-h-40 overflow-scroll'>
        {
          filteredData.map(item => {
            return (
              <li key={item.id}>
                <Link 
                  to={`/ingredient/${item.str.replace(' ', '_')}`}
                >
                  {item.str}
                </Link>
              </li>
            );
          })
        }
      </ul>
      <h2>Search by Category</h2>
      <div className='grid grid-cols-2 gap-2'>
      {
        categories.map(item => {
          return (
            <Card 
              key={item.str}
              to={`/category/${item.str}`}
              item={item}
            />
          );
        })
      }
      </div>
    </div>
  );
}

export default Search;
