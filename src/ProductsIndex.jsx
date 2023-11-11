/* eslint-disable react/prop-types */


export function ProductsIndex(props) {

    return (
      <div>

        <h1>All Products</h1>

        {props.products.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={product.image_url} alt="" />
            </div>
        ))}
      </div>
    );
  }