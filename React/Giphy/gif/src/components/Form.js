import React from "react";
import { useState } from 'react';

function Form(props) {
    const [formData,setFormData]= useState({
        searchTerm: ""
    })
const handleChange = (e)=> {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }


const handleSubmit = (e)=>{
    e.preventDefault()
    props.gifsearch(formData.searchTerm)
}

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input placeholde="Enter Gif Name" type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} />
        <input type="submit" value="search"/>
      </form>
    </>
  );
}

export default Form;
