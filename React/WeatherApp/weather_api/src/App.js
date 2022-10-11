import { useState, useEffect } from "react";

import Weatherdisplay from "./components/Weatherdisplay";
import Form from './components/Form'
import './style.css'

function App() {
  const apiKey = "282ec6d9126f411eb7e214210221010";
  // Establish ApiKey

  const [placeInfo, setPlaceInfo] = useState({});

  const getPlaceInfo = async (searchTerm) => {
    try {
      
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchTerm}&days=1&aqi=no&alerts=no`
      )

      const data = await response.json();

      // Set Response to state
      setPlaceInfo({
        name: data.location.name,
        country: data.location.country,
        farenheit: {
          current: data.current.temp_f,
          high: data.forecast.forecastday[0].day.maxtemp_f,
          low: data.forecast.forecastday[0].day.mintemp_f
        },
        condition: data.current.condition.text,
        localtime: data.location.localtime
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPlaceInfo("New York");
  }, []);


  return (
    <div className="App">
      <Form placesearch={getPlaceInfo} />
      <Weatherdisplay placeInfo={placeInfo} />
    </div>
  );
}

export default App;
