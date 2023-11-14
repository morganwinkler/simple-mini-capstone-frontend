/* eslint-disable react/prop-types */

// tells the function that it will be taking in props from the parent component
export function ProductsIndex(props) {                                                                                        
    return (
      <div>
        <div className="row text-center">
          <h1 style={{margin: "25px"}}>All Products</h1>
        </div>
          {/* justify-content-md-center to center items within the row */}
          <div className="row justify-content-md-center">
            {/* takes the props and goes through each item in the prop element */}
            {props.products.map((product) => (
              // key=product.id is needed for the map
                <div key={product.id} className="card text-bg-light" style={{width: "18rem", margin: "5px"}}>
                  <img className="card-img-top"  src={product.image_url} alt="" style={{maxHeight: "250px"}} />
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">{product.price}</p>
                  </div>
                    {/* on the mouse click event we want to take the props of onShowProduct from the parent component with the argument of product */}
                    <button className="btn btn-primary" onClick={() => props.onShowProduct(product)}>More Info</button>
                </div>
            ))}
          </div>
       
      </div>
    );
  }