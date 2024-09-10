import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  function handlechange(e) {
    setName(e.target.value); // Update state
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
};

export default Form;
