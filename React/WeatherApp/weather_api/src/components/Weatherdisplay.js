import React from "react";
import Clear from "../images/clear.jpg";
import Cloudy from "../images/cloudy.jpg";
import Overcast from "../images/overcast.jpg";
import Rainy from "../images/Rain.jpg";
import Snow from "../images/snow.jpg";
import Sunny from "../images/Sunny.jpg";



function Weatherdisplay({placeInfo}) {
  const loaded = () => {
    return (
      <div className="weather-container" style={
        placeInfo.condition?.toLowerCase() === "clear" ||
        placeInfo.condition?.toLowerCase() === "sunny" 
          ? { backgroundImage: `url(${Sunny})` }
          : placeInfo.condition?.includes("Cloudy")  || placeInfo.condition?.includes("Partly cloudy") 
          ? { backgroundImage: `url(${Cloudy})` }
          : placeInfo.condition?.toLowerCase().includes("rainy")  || placeInfo.condition?.includes("Light rain") 
          ? { backgroundImage: `url(${Rainy})` }
          : placeInfo.condition?.toLowerCase().includes("snow")
          ? { backgroundImage: `url(${Snow})` }
          : { backgroundImage: `url(${Overcast})` }
           
      }>
                  <h1>Current: {placeInfo.farenheit?.current}° F</h1>
                  <h1>Condition:{placeInfo.condition}</h1>
                  <h1>High:{placeInfo.farenheit?.high} ° F</h1>
                  <h1>Low:{placeInfo.farenheit?.low}° F</h1>
                  <h1>Time:{placeInfo.localtime}</h1>
                  <h2 className="country"> {placeInfo.name}, {placeInfo.country} </h2>
      </div>
    );
  };
const loading = ()=>{
      return <h1>No Info To Display</h1>
  }
  return placeInfo? loaded() : loading()
}

export default Weatherdisplay;
