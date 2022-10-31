import React from "react";

function DisplayRandom({giffy}) {
  const loaded = () => {
  
    return (
      <div className="gifContainer">
        {/* {giffy.images.original.url ? ( */}
                <img src={`${giffy}`} alt="alternate" className="img" />
                {/* ) : ("not displayed") 
                }  */}
      </div>
    );
  };
  const loading = ()=>{
      return <h1>No Gifs To Display</h1>
  }
  return giffy ? loaded() : loading()
}

export default DisplayRandom;
