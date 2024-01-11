import { Link } from "react-router-dom";

import './Card.css';

function Card({ to, item }) {
  return (
    <Link to={to} className='card-title-nounderline'>
      <div className='card-container'>
      <img src={item.image} alt={item.str} className='card-image' />
      <div className='card-title'>
        <h3>{item.str}</h3>
      </div>
      </div>
    </Link>
  );
}

export default Card;
