"use client";

import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
   const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // send value to parent
  };

  return (
    <div className="w-full flex justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search books by title..."
        className="w-full max-w-2xl p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>
  );
};

export default SearchBar;