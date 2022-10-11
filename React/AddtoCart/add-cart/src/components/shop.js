import React, { useState } from "react";
import list from "../models/data";
import Cards from "./card";
import "../styles/shop.css";

const Shop = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Shop;