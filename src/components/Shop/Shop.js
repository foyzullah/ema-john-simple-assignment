import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  return (
    <div>
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
};

export default Shop;
