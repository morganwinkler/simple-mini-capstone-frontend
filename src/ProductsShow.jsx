/* eslint-disable react/prop-types */

// tells the modal that it will be taking in props from the parent element
export function ProductsShow(props) {

  // creates a function that takes in event as an argument
  const handleSubmit = (event) => {
        // by default the browser will want to send the form data to the current URL and refresh the page - this prevents that
         event.preventDefault();
        //  establishes that the parameters are coming from the form that is below
        // event.target refers to the HTML element that triggered the event - in this case is a button click
         const params = new FormData(event.target);
        //  calls the props parent function onUpdateProduct on the product with the given id - passes params to it, clears form on button click
         props.onUpdateProduct(props.product.id, params, () => event.target.reset());
       }; 

  // creates a function that will destroy a product by calling on the parent function onDestroyProduct and passing in the product
  const handleClick = () => {
        props.onDestroyProduct(props.product);
       };

    return (
      <div>
        <h1>Product Information</h1>
        <p>Name: {props.product.name}</p>
        <p>Description: {props.product.description}</p>
        {/* onSubmit = form handler function that fires when form gets submitted */}
        <form onSubmit={handleSubmit}>
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
        {/* onClick = mouse event handler function - fires when primary button was clicked on the pointing device */}
        <button onClick={handleClick}>Delete Item</button>
      </div>
    );
  }