import React from "react";

function Card(props) {
  return (
    <>
      <h1>Current Pic</h1>
      <img className="picture" src={props.images} alt="carnivalStuff" />
    </>
  );
}

export default Card;