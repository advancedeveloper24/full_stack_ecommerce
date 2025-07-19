import React from "react";
import { IoSearchCircle } from "react-icons/io5";
import Button from "@mui/material/Button";

const SearchBox = () => {
  return (
    <div className="headerSearch m-3">
      <input type="text" placeholder="Search for products..." />
      <Button>
        <IoSearchCircle />
      </Button>
    </div>
  );
};

export default SearchBox;
