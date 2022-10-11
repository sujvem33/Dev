import React from "react";
import { useState, useEffect } from 'react';


function Form(props) {
    // const [placeInfo, setPlaceInfo] = useState({});

    const [place, setPlace]= useState({
        searchTerm: ""
    })

    const handleChange = (e) => {
        setPlace({
            ...place, 
            [e.target.name]: e.target.value
        })
    }


const handleSubmit = (e)=>{
    e.preventDefault()
    props.placesearch(place.searchTerm)
}

return (
    <div className="app">
        <div className="search-input">
         <form onSubmit={handleSubmit}>
        <input placeholder="Enter a Place" type="text" name="searchTerm" onChange={handleChange} value={place.searchTerm} />
         <input type="submit" value="Search"  className="search-button"/>
        </form>
        </div>
        </div>

        

    
)
}

export default Form;
