import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastname: "" });



  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({...name, firstName: e.target.value})}
          type="text"
          value={name.firstName}
        />

        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          name={name.lastname}
        />

        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default Form;
