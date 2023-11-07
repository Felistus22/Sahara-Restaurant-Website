import React, { useState } from 'react'
import { MenuList } from '../components/MenuList';
import MenuItem from '../components/MenuItem';
import Cart from '../components/Cart';
import '../styles/Menu.css';

function Menu() {

  const [orderedItems, setOrderedItems] = useState([]);

  const handleOrder = (item) => {
    // Add the ordered item to the list
    setOrderedItems([...orderedItems, item]);
  }; 

  return (
    <div className='menu'>
      <h1 className='menuTitle'>OUR MENU</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem 
             key = {key}
             image = {menuItem.image}
             name = {menuItem.name}
             price = {menuItem.price}
             onOrder = {handleOrder}/*This allows the MenuItem component to call handleOrder when the "Order Now" button is clicked, enabling communication between the child MenuItem component and the parent Menu component */
            />
          );
        })}
      </div>
      <Cart orderedItems={orderedItems} />
    </div>
  )
}

export default Menu
