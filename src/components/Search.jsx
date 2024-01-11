import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from './Card';

import './Search.css';
import './Cards.css';

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
    <div className='search-container'>
      <h2>Search by Ingredient</h2>
      <input 
        type='text' 
        placeholder='Type an ingredient here...' 
        value={searchTerm} 
        onChange={handleSearch}
        className='search-bar'
      />
      <ul className='search-results'>
        {
          filteredData.map(item => {
            return (
              <li key={item.id} className='search-link-spacing search-link-styling'>
                <Link 
                  to={`/ingredient/${item.str.replace(' ', '_')}`}
                  className='search-link-text-decor'
                >
                  {item.str}
                </Link>
              </li>
            );
          })
        }
      </ul>
      <h2>Search by Category</h2>
      <div className='cards-container'>
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
