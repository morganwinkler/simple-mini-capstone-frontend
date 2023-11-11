import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew";
// imports the Modal
import { Modal } from "./Modal";

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
      setProducts([...products, response.data])}
    )};

  useEffect(handleIndexProducts, []);

    return (
      <div>
        <ProductsNew onCreateProduct={handleCreateProduct} />
        <ProductsIndex products={products}/>
        <Modal show={true}>
          <h1>Test</h1>
        </Modal>
      </div>
    )
  }