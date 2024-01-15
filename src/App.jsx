import { Route, Routes, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Ingredient from './components/Ingredient';
import Category from './components/Category';
import Country from './components/Country';
import Meal from './components/Meal';

function App() {
  return (
    <HashRouter>
      <Header />
      <main className='max-w-lg mx-auto px-3'>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/ingredient/:name' element={<Ingredient />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path='/area/:name' element={<Country />} />
        <Route path='/meal/:id' element={<Meal />} />
      </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
