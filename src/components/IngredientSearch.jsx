import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function IngredientSearch() {
  const [ingredients, setIngredients] = useState([]);
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
    </div>
  );
}

export default IngredientSearch;
