import { Link } from "react-router-dom";

import './Card.css'

function Card({ to, item }) {
  return (
    <Link 
      to={to}
      className='card-container card-title'
    >
      <img src={item.image} className='card-image' />
      <h3>{item.str}</h3>
    </Link>
  );
}

export default Card;
