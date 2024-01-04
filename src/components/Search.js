import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css';

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
        })
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

  const handleIngredientSelect = (item) => {
    setSearchTerm(item.str);
  }

  return (
    <div className='searchbar-container'>
      <h2>Search by an ingredient</h2>
      <input type='text' 
        placeholder='Search by ingredients...' 
        value={searchTerm} 
        onChange={handleSearch}
      />
      <ul className='search-results'>
        {
          filteredData.map(item => {
            return (
              <li 
                key={item.id}
                onClick={() => handleIngredientSelect(item)}
              >
                <Link to={`/ingredient/${item.str.replace(' ', '_')}`}>{item.str}</Link>
              </li>
            );
          })
        }
      </ul>
      <h2>Search by a category</h2>
      {
        categories.map(item => {
          return (
            <Link 
              key={item.id}
              to={`/category/${item.str}`}
            >
              <img src={item.image} />
              <span>{item.str}</span>
            </Link>
          );
        })
      }
    </div>
  );
}

export default Search;