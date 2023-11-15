import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../services/authService";
import { Link } from "react-router-dom";
import { fileChange } from "../services/fileChange";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    brand: "",
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const [disabled, setDisabled] = useState(false);

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

  const handleFileChange = (e) => {
    setDisabled(true);
    fileChange(e)
      .then((response) => {
        setNewProduct((prev) => ({
          ...prev,
          [e.target.name]: response.data.image,
        }));
        setDisabled(false);
        console.log("Image changed");
      })
      .catch((err) => {
        setDisabled(false);
        console.log("Error while uploading the file: ", err);
      });
  };

  return (
    <div className="AddProductPage">
      <h1 className="form-title">Add Product</h1>
      <Link to="/all-products">
        <button className="back-button">Back</button>
      </Link>

      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="brand" className="form-label">
            Brand:
          </label>
          <input
            type="text"
            name="brand"
            className="form-input"
            value={newProduct.brand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            name="price"
            className="form-input"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            name="description"
            className="form-input"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            name="image"
            className="form-input"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="form-submit" disabled={disabled}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
