import React, { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "11aead3def074cd1818924ff0e8ab011";
  //   const API_KEY = "46ab417f24854a3285bb07e264933c4e";
//   const API_KEY = "800b67f96a61480eb0dbc0be2db4b8ac";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕰️ {food.readyInMinutes} Min</strong>
          </span>
          <span>
            👩‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 🥕Vegetarian" : " 🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐮Vegan" : ""} </strong>
          </span>
        </div>
        <div>
          <span>${food.pricePerServing} Per serving</span>
        </div>
        <h2>Ingredients</h2>
       <ItemList food={food} isLoading={isLoading}/>

        <h2>Instructions</h2>

        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
