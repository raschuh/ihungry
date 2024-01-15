import { useState } from 'react';

import IngredientSearch from './IngredientSearch';
import Categories from './Categories';
import Countries from './Countries';

function Search() {
  const navStates = ['Category', 'Country', 'Ingredient'];
  const [currentNavState, setCurrentNavState] = useState(navStates[0]);

  const handleNavSelect = event => {
    setCurrentNavState(event.target.textContent);
  };

  const selectNavView = () => {
    switch (currentNavState) {
      case 'Category': return <Categories />
      case 'Country': return <Countries />
      case 'Ingredient': return <IngredientSearch />
    }
  };
 
  return (
    <div>
      <ul className='flex flex-row gap-1 justify-center mb-6' >
      {
        navStates.map(state => {
          return (
            <li 
              onClick={handleNavSelect}
              className={`border border-dark p-2 ${
                state === currentNavState ? 'bg-dark text-light' : ''
              }`}
            >
              {state}
            </li>
          )
        })
      }
      </ul>
      {selectNavView()}
    </div>
  );
}

export default Search;
