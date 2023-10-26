import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put, axiosDelete } from "../services/authService";
import { fileChange } from "../services/fileChange";

const EditProduct = () => {
  const initialProductState = {
    brand: "",
    name: "",
    price: 0,
    description: "",
    image: "",
  };

  const [product, setProduct] = useState(initialProductState);

  const [disabled, setDisabled] = useState(false)

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    get(`/products/edit/${productId}`)
      .then((response) => {
        const oneProduct = response.data;
        setProduct(oneProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  const handleFormSubmit = (e) => {
   
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {
      brand: product.brand,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
    };

    // Make a PUT request to update the project
    put(`/products/edit/${productId}`, requestBody)
      .then((response) => {
        console.log("Updated ===>", response.data);
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/products/${productId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = () => {
    // Make a DELETE request to delete the project
    axiosDelete(`/products/delete/${productId}`)
      .then((response) => {
        console.log("Deleted Product ==>", response.data);
        // Once the delete request is resolved successfully
        // navigate back to the list of products.
        navigate("/all-products");
      })
      .catch((err) => console.log(err));
  };

  const handleFileChange = (e) => {
    setDisabled(true)
    fileChange(e)
      .then((response) => {
        setProduct((prev) => ({...prev, [e.target.name]: response.data.image}))
        setDisabled(false)
       console.log("Image changed")
      })
      .catch((err) => {
        setDisabled(false)
        console.log("Error while uploading the file: ", err);
      });
}

  return (
    <div className="EditProductPage">
      <h1 className="form-title">Edit Product</h1>

      <form onSubmit={handleFormSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="brand" className="form-label">Brand:</label>
          <input
            type="text"
            name="brand"
            className="form-input"
            value={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="number"
            name="price"
            className="form-input"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            name="description"
            className="form-input"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Image:</label>
          <input
            type="file"
            name="image"
            className="form-input"
            onChange={handleFileChange}
          />
        </div>

        <input type="submit" value="Submit" className="form-submit" />

      <button onClick={deleteProduct} className="form-submit-delete">Delete</button>
      </form>
    </div>
  );
};

export default EditProduct;
