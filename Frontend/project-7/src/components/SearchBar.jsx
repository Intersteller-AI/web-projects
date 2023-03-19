import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <div className="md:w-[500px] w-[40vw] h-9 overflow-hidden rounded-full border-slate-500 border-[2px]">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex items-center justify-between px-1 w-full h-full"
      >
        <input
          className="flex-1 h-full outline-none bg-transparent px-4 font-medium text-white border-r-[2px] border-slate-600"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <FiSearch
          className="text-[20px] w-10 hover:cursor-pointer"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SearchBar;
