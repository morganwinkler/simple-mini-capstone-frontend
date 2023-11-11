// imports axios
import axios from "axios";
// imports useState and useEffect
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex"

export function Content() {
  
  // removes placeholder data and uses useState and useEffect hooks to define the data via a backend web request


  //  [current value, function to update the state value]
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    // backend web request
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      // calls the function and tells it that the new state value of Products is response.data
      setProducts(response.data);
    });
  };

  // only run effect on initial render
  useEffect(handleIndexProducts, []);

    return (
      <div>
        <ProductsIndex products={products}/>
      </div>
    )
  }