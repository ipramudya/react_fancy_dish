import { Link } from 'react-router-dom';
import blankImage from '../../assets/not-found-placeholder.jpg';

const EmptyCard = () => {
  return (
    <div className='card_container'>
      <div className='card_image'>
        <img src={blankImage} alt='restaurant_image' className='images' />
      </div>
      <div className='card_item'>
        <Link to='/' className='card_title'>
          Restaurant's Not Found
        </Link>
        <div className='card_detail'>
          <div className='card_city'>
            <span className='icon' aria-label='location icon'>
              <i className='fas fa-map-marker-alt'></i>
            </span>
            <p className='card_city_text'>Nothing</p>
          </div>
          <div className='card_rating'>
            <span className='icon' aria-label='star icon'>
              <i className='fas fa-star'></i>
            </span>
            <p className='card_rating_text'>Nothing</p>
          </div>
        </div>
        <p className='card_desc'>
          There is no Description to show, click title above for getting back
          onto home page
        </p>
      </div>
    </div>
  );
};

export default EmptyCard;
