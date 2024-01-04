import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header-banner'>
      <div className='header-body-container'>
        <Link to='/' className='header-link'>
          <h1 className='header-title'>i<span className='header-span-title'>hungry</span></h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;