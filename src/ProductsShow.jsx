/* eslint-disable react/prop-types */
export function ProductsShow(props) {
    return (
      <div>
        <h1>Product Information</h1>
        <p>Name: {props.product.name}</p>
        <p>Description: {props.product.description}</p>
        <form action="">
          <h1>Would you like to update {props.product.name}?</h1>
          <div>
            Name: <input defaultValue={props.product.name} name="name" type="text" />
          </div>
          <div>
            Description: <input defaultValue={props.product.description} name="description" type="text" />
          </div>
          <div>
            Price: <input defaultValue={props.product.price} name="price" type="text" />
          </div>
          <div>
            Image Url: <input defaultValue={props.product.image_url} name="image_url" type="text" />
          </div>
          <button type="submit"> Update Item</button>
        </form>
      </div>
    );
  }