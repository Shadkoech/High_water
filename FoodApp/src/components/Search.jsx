import { useState, React, useEffect } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "11aead3def074cd1818924ff0e8ab011";
// const API_KEY = "46ab417f24854a3285bb07e264933c4e"
// const API_KEY = "800b67f96a61480eb0dbc0be2db4b8ac";


const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  // syntax of the useEffect hook
  // Pass a callback function and a dependency array

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
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
