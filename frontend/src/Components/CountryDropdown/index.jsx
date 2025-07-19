import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Button from "@mui/material/Button";

const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-dlex flex-column">
          <span className="label"> Your Location </span>
          <span className="name"> United States </span>
        </div>
        <span className="ml-auto">
          <IoIosArrowDropdownCircle />
        </span>
      </Button>
    </>
  );
};

export default CountryDropdown;
