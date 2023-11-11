import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew";

export function Content() {
  
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params)
    .then((response) => {
      console.log(response.data);
      // this says that the products are what was already included plus the newest product
      setProducts([...products, response.data])}
    )};

  useEffect(handleIndexProducts, []);

    return (
      <div>
        <ProductsNew onCreateProduct={handleCreateProduct} />
        <ProductsIndex products={products}/>
      </div>
    )
  }