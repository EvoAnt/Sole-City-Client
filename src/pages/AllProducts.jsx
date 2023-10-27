import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { get } from "../services/authService";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");

  const getAllProducts = () => {
    get("/products/all-products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleBrandFilter = (brand) => {
    if (brand === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.brand === brand);
      setFilteredProducts(filtered);
    }
    setSelectedBrand(brand);
  };

  return products ? (
    <div className="center-content">
      <br />
      <h1 className="title-header">All Sneakers</h1>


      <Link to={'/products/add-product'}>
        <button className="add-sneaker-button">Add Sneaker</button>
      </Link>

      <br />

      <div className="filter-container">
        <label>Filter by Brand:</label>
        <select
          value={selectedBrand}
          onChange={(e) => handleBrandFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Nike">Nike</option>
          <option value="Air Jordan">Jordan</option>
          <option value="Adidas">Adidas</option>
          <option value="Vans">Vans</option>
          <option value="Off-White">Off-White</option>
        </select>
      </div>
  
      <div className="product-cards-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
      <br />
    </div>
  ) : (
    <Spinner />
    );
};

export default AllProducts;
