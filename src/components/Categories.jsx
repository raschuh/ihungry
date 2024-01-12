import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card'

function Categories() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      const categories = response.data['categories'];
      setList(
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
  }, [list]);

  return (
    <div className='grid grid-cols-2 gap-2'>
    {
      list.map(item => {
        return (
          <Card 
            key={item.str}
            to={`/category/${item.str}`}
            item={item}
            preview={false}
          />
        );
      })
    }
    </div>
  );
}

export default Categories;