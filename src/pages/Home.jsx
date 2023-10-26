import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { get } from "../services/authService";
import ProductCard from "../components/ProductCard";
import CarouselComponent from "../components/CarouselComponent";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [newest, setNewest] = useState([]);
  const [topSellers, setTopSellers] = useState([]);

  const handleSearch = (query) => {
    get(`/search?query=${query}`)
      .then((response) => {
        console.log("Search ==>", response.data);
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
      <SearchBar onSearch={handleSearch} />
      <div className="home-title">
        <br />
        <h1>SOLE CITY</h1>
        <p>Your #1 sneaker reseller</p>
      </div>
      <CarouselComponent />
      {searchResults.map((result) => {
        return <ProductCard key={result._id} {...result} />;
      })}

      <br />

      <h2>NEW RELEASES</h2>
      <br />
      <div className="new-releases-container">
        {newest.map((result) => {
          return <ProductCard key={result._id} {...result} />;
        })}
      </div>

      <hr />

      <h2>TOP SELLERS</h2>
      <br />
      <div className="top-sellers-container">
        {topSellers.map((result) => {
          return <ProductCard key={result._id} {...result} />;
        })}
      </div>
    </>
  );
};

export default Home;
