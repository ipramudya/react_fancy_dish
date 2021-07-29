import { useEffect, useState } from 'react';
import ENDPOINTS from '../../global/endpoints';
import FavoriteRestaurant from '../../utils/FavoriteRestaurant-idb';

const Image = ({ restaurant }) => {
  const [likedButton, setLikedButton] = useState(null);
  const [isIdbExist, setIsIdbExist] = useState(null);
  const { id } = restaurant;

  useEffect(() => {
    FavoriteRestaurant.getRestaurant(id).then((res) => {
      setIsIdbExist(!!res);
    });
  }, [FavoriteRestaurant.getAllRestaurants(id)]);

  const clickAndPutRestaurant = async () => {
    await FavoriteRestaurant.putRestaurant(restaurant);
    setLikedButton(true);
  };

  const clickAndDeleteRestaurant = async () => {
    await FavoriteRestaurant.deleteRestaurant(id);
    setLikedButton(false);
  };

  return (
    <div className='restaurant_image'>
      <img
        src={ENDPOINTS.PICTURE(restaurant.pictureId)}
        alt='restaurant_image'
        className='images'
      />
      {isIdbExist ? (
        <button
          type='button'
          className='like_button'
          onClick={clickAndDeleteRestaurant}
        >
          <i className='fas fa-heart'></i>
        </button>
      ) : (
        <button
          type='button'
          className='like_button'
          onClick={clickAndPutRestaurant}
        >
          <i className='far fa-heart'></i>
        </button>
      )}
    </div>
  );
};

export default Image;
