import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  return <div>
    <h2> Product List</h2>
    <p>Displaying the product id: {id}</p>
    </div>;
};

export default Products;
