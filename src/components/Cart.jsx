// Cart.js
import React from 'react';

function Cart({ orderedItems }) {
  return (
    <div className='cart'>
      <h2>Ordered Items</h2>
      <ul>
        {orderedItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
