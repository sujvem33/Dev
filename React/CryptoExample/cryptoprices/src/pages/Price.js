import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

 function Price (props) {
  // Our api key from coinapi.io
  const apiKey = "0B98462F-1C70-4F22-82B2-858A4B29B0A1";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol

  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;


  const [coin, setCoin] = useState("null");

  
  const getCoin = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch(e){
      console.error(e)
    }
  };


  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();
};



export default Price;