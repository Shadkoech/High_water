import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/profile", {state: {username}});
  }
  return (
    <div>
      This is the homepage
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={handleClick}>To profile page</button>
    </div>
  );
};

export default Homepage;
