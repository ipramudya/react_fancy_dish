import { useState } from 'react';
import { useParams } from 'react-router';

import { buttonValue } from '../../utils/buttonValue';
import MenuDesc from './menu-desc';
import FoodDrink from './food-drink';
import AddReview from './add-review';

const Menu = () => {
  const [button, setButton] = useState('Details');
  const [active, setActive] = useState({
    buttonName: 'Details',
  });
  const { id } = useParams();

  const conditionalRender = (cases) => {
    switch (cases) {
      case 'Detail':
        return <MenuDesc />;
      case 'Menu':
        return <FoodDrink />;
      case 'Reviews':
        return <AddReview id={id} />;
      default:
        return <MenuDesc />;
    }
  };

  const toggleActive = (param) => {
    setActive({
      buttonName: param,
    });
  };

  return (
    <div className='detail_menu'>
      <div className='detail_label'>
        {buttonValue.map((item) => {
          return (
            <button
              type='button'
              key={item.name}
              className={
                active.buttonName === item.name
                  ? 'detail_button active'
                  : 'detail_button'
              }
              onClick={() => {
                toggleActive(item.name);
                setButton(item.name);
              }}
            >
              {item.name}
              <i className={item.icon}></i>
            </button>
          );
        })}
      </div>
      <div className='detail_content'>{conditionalRender(button)}</div>
    </div>
  );
};

export default Menu;
