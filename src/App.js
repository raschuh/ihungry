import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className='app-main-container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
