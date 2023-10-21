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

  return <div>
    
    <h1 className="title-header">All Sneakers</h1>

    <Link to={'/products/add-product'}>
    
    <button>Add Sneaker</button>
    </Link>

    {products.map((product) => {
        return <ProductCard key={product._id} {...product} />
    })}



  </div>;
};

export default AllProducts;
