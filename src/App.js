import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className='app-main-container'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
