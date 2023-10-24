import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { get } from "../services/authService";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [newest, setNewest] = useState([]);
  const [topSellers, setTopSellers] = useState([]);

  const handleSearch = (query) => {
    get(`/search?query=${query}`)
      .then((response) => {
        console.log('Search ==>', response.data);
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    get("/products/newest")
      .then((response) => {
        setNewest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    get("/products/top-sellers")
      .then((response) => {
        setTopSellers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>Home</h2>
      <SearchBar onSearch={handleSearch} />
      {searchResults.map((result) => {
       return  <ProductCard key={result._id} {...result} />;
      })}
      
        <h2>New Releases</h2>
      <div className="new-releases-container">
        {newest.map((result) => {
          return <ProductCard key={result._id} {...result} />;
        })}
      </div>

        <h2>Top Sellers</h2>
      <div className="top-sellers-container">
        {topSellers.map((result) => {
          return <ProductCard key={result._id} {...result} />;
        })}
      </div>
    </>
  );
};

export default Home;
