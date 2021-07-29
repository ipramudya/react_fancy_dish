import { useState } from 'react';
import ENDPOINTS from '../../global/endpoints';
import RestaurantList from './RestaurantList';
import Loader from '../Loaders';
import './style.css';
import useAxios from '../../hooks/useAxios';

const Homepage = () => {
  const [query, setQuery] = useState('');
  const {
    restaurant: { restaurants: allRestaurants },
    loading,
    error,
  } = useAxios({
    url: ENDPOINTS.ALL_RESTAURANTS,
    method: 'get',
  });

  return (
    <div className='Homepage'>
      <div className='menu_bar'>
        <div className='menu_tagline'>
          <h2>Collections</h2>
          <p>
            Explore curated lists of top restaurants, cafes, bars based on
            trends
          </p>
        </div>
        <div className='search'>
          <input
            type='search'
            name='search'
            placeholder='Search...'
            onChange={(event) => setQuery(event.target.value.toLowerCase())}
          />
          <span className='search_icon'>
            <i className='fas fa-search'></i>
          </span>
        </div>
      </div>
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <div className='restaurants'>
        {allRestaurants &&
          allRestaurants
            .filter((item) => {
              if (query === '') {
                return item;
              } else if (item.name.toLowerCase().includes(query)) {
                return item;
              }
            })
            .map((restaurant) => (
              <RestaurantList restaurant={restaurant} key={restaurant.id} />
            ))}
      </div>
    </div>
  );
};

export default Homepage;
