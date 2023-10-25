import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="SearchInput" // Add a class for styling
      />
      <button onClick={handleSearch} className="SearchButton">
        Search
      </button>{" "}
    </div>
  );
};

export default SearchBar;
