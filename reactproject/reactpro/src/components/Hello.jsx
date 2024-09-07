import React from "react";

const name = "Rob";

const displayMessage = () => {
  return "Wow!"
}

const Hello = () => {
  return <div>He is called {name}. Everytime he sees a new this he's like {displayMessage()}</div>;
};

export default Hello;
