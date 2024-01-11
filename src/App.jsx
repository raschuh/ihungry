import { Route, Routes, HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Category from './components/Category';
import Ingredient from './components/Ingredient';
import Meal from './components/Meal';

function App() {
  return (
    <HashRouter>
      <Header />
      <main className='max-w-lg mx-auto px-3'>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/category/:name' element={<Category />} />
        <Route path='/ingredient/:name' element={<Ingredient />} />
        <Route path='/meal/:id' element={<Meal />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
