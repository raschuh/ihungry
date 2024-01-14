import IngredientSearch from './IngredientSearch';
import Categories from './Categories';
import Countries from './Countries';

function Search() {
  return (
    <div>
      <h2>Search by Ingredient</h2>
      <IngredientSearch />

      <h2>Search by Category</h2>
      <Categories />
      
      <h2>Search by Country</h2>
      <Countries />
    </div>
  );
}

export default Search;
