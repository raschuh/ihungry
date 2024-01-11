import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='py-2 mb-6 text-center bg-dark'>
      <div>
        <Link to='/'>
          <h1 className='text-light'>
            i<span className='uppercase text-accent'>hungry</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;