import React from "react";

function Display({gif}) {
  const loaded = () => {
  
    return (
      <div  className="gifContainer">
        {gif.data.map((gif, i)  => (
           <div key={i} >
            {gif.images.original.url ? (
                <img src={gif.images.original.url} alt="alternate" className="img" />
            ) : ("not displayed") 
                } 
 
                </div>
            ) ) }      
      </div>
    );
  };
  const loading = ()=>{
      return <h1>No Gifs To Display</h1>
  }
  return gif ? loaded() : loading()
}

export default Display;
