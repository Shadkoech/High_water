import React from "react";

const Fruit = ({ name, price, emoji, soldout }) => {
  return (
    <>

      {/* {emoji} {name} {price} */}
    
        <li>
          {emoji} {name} {price} {soldout ? ": SoldOut" : "" }
        </li>
      </>
  );
}
export default Fruit;
