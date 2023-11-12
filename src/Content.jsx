import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex"
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";

export function Content() {
  
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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

  const handleShowProduct = (product) => {
    console.log(currentProduct, product)
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  const handleUpdateProduct = (id, params) => {
        console.log("handleUpdateProduct", params);
        axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
          setProducts(
            products.map((product) => {
              if (product.id === response.data.id) {
                return response.data;
              } else {
                return product;
              }
            })
          );
          handleClose();
        });
      };
  
  const handleDestroyProduct = (product) => {
        console.log("handleDestroyProduct", product);
        axios.delete(`http://localhost:3000/products/${product.id}.json`).then((response) => {
          setProducts(products.filter((p) => p.id !== product.id));
          console.log(response);
          handleClose();
          });
       };


  useEffect(handleIndexProducts, []);

    return (
      <div className="container">
        <ProductsNew onCreateProduct={handleCreateProduct} />
        <ProductsIndex products={products} onShowProduct={handleShowProduct} />
        <Modal show={isProductsShowVisible} onClose={handleClose}>
          <ProductsShow product={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct} />
        </Modal>
      </div>
    )
  }