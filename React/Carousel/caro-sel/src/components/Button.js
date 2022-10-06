import React from "react";

function Button(props) {
  return (
    <>
      <button onClick={props.picToggler}>{props.symbols}</button>
    </>
  );
}


export default Button;