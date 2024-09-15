import { useState, React, useEffect } from "react";
import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "11aead3def074cd1818924ff0e8ab011";

const Search = ({foodData, setFoodData}) => {
  const [query, setQuery] = useState("pizza");

  // syntax of the useEffect hook
  // Pass a callback function and a dependency array

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
      className={styles.input}
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
