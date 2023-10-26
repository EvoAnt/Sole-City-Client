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
    if (query) {
      get(`/search?query=${query}`)
        .then((response) => {
          console.log("Search ==>", response.data);
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Reset searchResults when the query is empty
      setSearchResults([]);
    }
  };

  // const handleKeyPress = (e, query) => {
  //   console.log('KEYPRESS', e);
  //   if (e.key === "Enter") {
  //     handleSearch(query);
  //   }
  // };

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
      <SearchBar onSearch={handleSearch} 
      // onKeyUp={handleKeyPress}
       />
      <div className="home-title">
        <br />
        <h1>SOLE CITY</h1>
        <p>YOUR #1 SNEAKER RESELLER</p>
      </div>
      <CarouselComponent />

      {searchResults.length > 0 && (
        <div className="new-releases-container">
          <h2>SEARCHED</h2>

          {searchResults.map((result) => (
            <ProductCard key={result._id} {...result} />
          ))}
        </div>
      )}

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
