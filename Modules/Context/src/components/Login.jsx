import React, { useContext, useState } from "react";
import { userContext } from "../App";

const Login = () => {
  const [value, setValue] = useState("");
  const { user, setUser } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser(value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
