import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const RestaurantContext = createContext();

const RestaurantContextProvider = (props) => {
  const [restaurant, setRestaurant] = useState([]);
  const [cusReviews, setCusReviews] = useState([]);

  const addRestaurant = (_restaurant) => {
    setRestaurant({ ..._restaurant, uuid: uuidv4() });
  };

  const addCusReviews = (_cusReviews) => {
    setCusReviews([..._cusReviews]);
  };

  return (
    <RestaurantContext.Provider
      value={{ restaurant, cusReviews, addRestaurant, addCusReviews }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
