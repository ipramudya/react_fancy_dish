import { useContext } from 'react';
import { RestaurantContext } from '../../context/RestaurantContext';

const FoodDrink = () => {
  const { restaurant } = useContext(RestaurantContext);
  return (
    <div className='food_drink'>
      <div className='foodndrink_container'>
        <h3 className='title'>
          <span>
            <i className='fas fa-utensils'></i>
          </span>
          Meals
        </h3>
        <ul className='meal_list'>
          {restaurant.menus.foods.map((item) => (
            <li key={item.uuid}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className='foodndrink_container'>
        <h3 className='title'>
          <span>
            <i className='fas fa-glass-cheers'></i>
          </span>
          Beverages
        </h3>
        <ul className='beverages_list'>
          {restaurant.menus.drinks.map((item) => (
            <li key={item.uuid}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodDrink;
