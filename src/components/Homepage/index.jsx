import ENDPOINTS from '../../global/endpoints';
import RestaurantList from './RestaurantList';
import Loader from '../Loaders';
import useFetch from '../../hooks/useFetch';
import './style/index.css';

const Homepage = () => {
  const {
    data: { restaurants: allRestaurants },
    isPending,
  } = useFetch(ENDPOINTS.ALL_RESTAURANTS);

  return (
    <div className='Homepage'>
      <h2>List of Our Restaurants</h2>
      {isPending && <Loader />}
      <div className='restaurants'>
        {allRestaurants &&
          allRestaurants.map((restaurant) => (
            <RestaurantList restaurant={restaurant} key={restaurant.id} />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
