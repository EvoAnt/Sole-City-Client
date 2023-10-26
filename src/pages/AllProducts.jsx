import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { get } from "../services/authService";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    get("/products/all-products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return products ? (
    <div className="center-content">
      <br />
      <h1 className="title-header">All Sneakers</h1>
      <Link to={'/products/add-product'}>
        <button className="add-sneaker-button">Add Sneaker</button>
      </Link>
  
      <div className="product-cards-container">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
    );
};

export default AllProducts;
