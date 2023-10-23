import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put, axiosDelete } from "../services/authService";

const EditProduct = () => {
  const initialProductState = {
    brand: "",
    name: "",
    price: 0,
    description: "",
    image: "",
  };

  const [product, setProduct] = useState(initialProductState);

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
    axiosDelete(`/products/edit/${productId}`)
      .then((response) => {
        console.log("Deleted Product ==>", response.data);
        // Once the delete request is resolved successfully
        // navigate back to the list of products.
        navigate("/all-products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProductPage">
      <h2>Edit Product</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default EditProduct;
