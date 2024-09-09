import React from "react";
import Fruit from "./Fruit";

const Fruits = () => {
  //   const fruits = ["Apple", "Orange", "Banana", "Pineapple", "Peas", "Guava"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍏", soldout: true },
    { name: "Orange", price: 3, emoji: "🍊", soldout: false },
    { name: "Banana", price: 2, emoji: "🍌", soldout: true },
    { name: "Kiwi", price: 18, emoji: "🥝", soldout: false },
    { name: "Pineapple", price: 15, emoji: "🍍", soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout = {fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
