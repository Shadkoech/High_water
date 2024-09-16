import React from 'react'
import FoodItem from './FoodItem'

const FoodList = ({foodData, setFoodId}) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} setFoodId = {setFoodId} food={food}/>
      ))}
    </div>
  )
}

export default FoodList
