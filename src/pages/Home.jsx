import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { get } from "../services/authService";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    get(`/search?query=${query}`)
    .then((response) => {
      if (Array.isArray(response)) {
        setSearchResults(response);
      } else {
        setSearchResults([]);
      }
    })
    .catch((error) => {
      console.log(error);
      setSearchResults([]); // Handle the error by setting an empty array
    });
  };

  return (
    <>
      <h2>Home</h2>
      <SearchBar onSearch={handleSearch} />
      {searchResults.map((result) => {
         <ProductCard key={result._id} {...result} /> 
      })}
    </>
  );
};

export default Home;
