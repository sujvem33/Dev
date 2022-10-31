import React from "react";


function Random(props) {
    
  return (
    <>
      <form className="form" >
        <button value="submit"  onClick={props.handleclick}>Click to get random Gif</button> 
      </form>
    </>
  );
}

export default Random;
