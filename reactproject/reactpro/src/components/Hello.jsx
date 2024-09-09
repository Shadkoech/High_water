import React from "react";

const Hello = ({person}) => {
  // console.log(props);
  return <div> {person.message}, {person.emoji} {person.name}, {person.seatNumbers}</div>;
};

export default Hello;
