import React, { useContext } from "react";
import { userContext } from "../App";

const Checkout = () => {
  const { user } = useContext(userContext);
  return <div>Checkout as {user}</div>;
};

export default Checkout;
