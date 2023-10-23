import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../services/authService";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    brand: "",
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { ...newProduct };

    post("/products/add-product", body)
      .then((response) => {
        console.log("Added Product ==>", response.data);
        navigate("/all-products");
        setNewProduct({
          brand: "",
          name: "",
          price: 0,
          description: "",
          image: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="AddProductPage">
      <h2>AddProduct</h2>

      <Link to="/all-products">
        <button>Back</button>
      </Link>

      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
        </div>
        <br />
        <br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
