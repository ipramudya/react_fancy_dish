import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import CONFIG from '../global/config';
import { RestaurantContext } from '../context/RestaurantContext';

axios.defaults.baseURL = CONFIG.BASE_URL;

const useAxios = ({ url, method, body = null, headers = null }) => {
  const { addRestaurant, restaurant, addCusReviews, cusReviews } =
    useContext(RestaurantContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        addRestaurant(res.data);
        if (res.data.restaurant) {
          addCusReviews(res.data.restaurant.customerReviews);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [cusReviews]);

  return { restaurant, loading, error };
};

export default useAxios;
