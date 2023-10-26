import { useState } from "react";

const SearchBar = ({ onSearch, onKeyUp }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      onKeyUp(searchQuery);
    }
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={handleEnter}
        className="SearchInput"
      />
      <button onClick={handleSearch} className="SearchButton">
        Search
      </button>{" "}
    </div>
  );
};

export default SearchBar;
