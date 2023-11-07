import React, { useState } from "react";

function MenuItem({image, name, price, onOrder}) {

  const [isOrdered, setIsOrdered] = useState('');

  const handleOrder = () => {
    const orderedItem = { name, price }; // Create an object with item details
    onOrder(orderedItem); // Notify the parent component about the order
  };

  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button className='order' onClick={handleOrder}>{isOrdered ? "Ordered" : "Order Now"}</button>
    </div>
  )
}

export default MenuItem;