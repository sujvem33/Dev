import { useState, useEffect } from "react";
import Display from "./components/Display";
import Form from './components/Form'
import Random from './components/Random'
import DisplayRandom from "./components/DisplayRandom";
import './style.css'

function App() {
  const apiKey = "DVj3Vm6yFmgCFafvlN3eOacJwLB3hklp";
  // Establish ApiKey

  const [Img, setImg] = useState(null);

  const getGif = async (searchTerm) => {
    try {
      
      const response = await fetch(
        `http://api.giphy.com/v1/gifs/search?apikey=${apiKey}&q=${searchTerm}&limit=5`
      );


      const data = await response.json();
      // console.log(JSON.stringify(data));
      console.log(data);

      // Set Response to state
      setImg(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getGif("");
  }, []);
  

  const [Images, setImages] = useState(null);

  const getGiffy = async () => {
    
    try {
      const result = await fetch(
        `http://api.giphy.com/v1/gifs/random?apikey=${apiKey}&tag=rainy`
      );
      
      const randomdata = await result.json();
      console.log(randomdata);
      setImages(randomdata.data.images.original.url);
    } catch (e) {
      console.error(e);
    }
  };


const handleclick = () => {
  
  getGiffy("");
}
useEffect(() => {
  getGiffy("");
}, []);

  return (
    
    <div className="App">
      <h1 className="header">Giphy</h1>
      <Form gifsearch={getGif} /><br/>
      <Display gif={Img} /> <br/> <br/> 
      <Random giffy={getGiffy} handleclick={handleclick} /> <br/> <br/> 
      <DisplayRandom giffy={Images} /> 
    </div>
  );
}

export default App;
