/* eslint-disable react/prop-types */


export function ProductsNew(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateProduct(params, () => event.target.reset());
         };

    return (
      <div className="mb-3 card" style={{paddingTop: "15px",paddingBottom: "15px", marginTop: "50px"}}>
        <h1 className="text-center">New Product</h1>
        <div className="mb-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3" style={{padding: "15px"}}>
              <label className="form-label">Name</label>
              <input className="form-control" name="name" type="text" />
            </div>
            <div className="mb-3" style={{padding: "15px"}}>
              <label className="form-label">Description</label>
              <input className="form-control" name="description" type="text" />
            </div>
            <div className="mb-3" style={{padding: "15px"}}>
              <label className="form-label">Price</label>
              <input className="form-control" name="price" type="text" />
            </div>
            <div className="mb-3" style={{padding: "15px"}}>
              <label className="form-label">Image URL</label>
              <input className="form-control" name="image_url" type="text" />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Create Product</button>
            </div>
          </form>
        </div>
      </div>
    );
  }