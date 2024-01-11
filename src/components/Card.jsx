import { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ to, item, preview }) {
  // Try load a smaller preview version first
  const [imgSrc, setImgSrc] = useState(item.image + (preview ? '/preview' : ''));

  // If cannot load preview image then load full sized image
  function cannotLoadPreview() {
    setImgSrc(item.image);
  }

  return (
    <Link to={to}>
      <div className='flex flex-col border border-slate-400 shadow-lg'>
        <img src={imgSrc} alt={item.str} onError={cannotLoadPreview} />
        <div className='bg-dark text-light text-center'>
          <h3>{item.str}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
