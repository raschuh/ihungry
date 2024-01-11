import { Link } from 'react-router-dom';

function Card({ to, item }) {
  return (
    <Link to={to}>
      <div className='flex flex-col border border-slate-400 shadow-lg'>
        <img src={item.image} alt={item.str} />
        <div className='bg-dark text-light text-center'>
          <h3>{item.str}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
