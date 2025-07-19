import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { IoSearchCircle } from "react-icons/io5";

const CountryDropdown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label"> Your Location </span>
          <span className="name"> United States </span>
        </div>
        <span className="ml-auto">
          <IoIosArrowDropdownCircle />
        </span>
      </Button>

      <Dialog open={true} className="locationModal">
        <h3>Choose your delivery options!</h3>
        <p>Enter your address and we will specify your options.</p>
        <div className="headerSearch">
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoSearchCircle />
          </Button>
        </div>

        <ul className="countryList">
          <li className="">
            <Button>Massachusetts</Button>
          </li>
          <li>
            <Button>New York</Button>
          </li>
          <li>
            <Button>Texas</Button>
          </li>
          <li>
            <Button>Florida</Button>
          </li>
          <li>
            <Button>North Carolina</Button>
          </li>
          <li>
            <Button>South Carolina</Button>
          </li>
          <li>
            <Button>California</Button>
          </li>
          <li>
            <Button>Ohio</Button>
          </li>
          <li>
            <Button>Kentucky</Button>
          </li>
          <li>
            <Button>Massachusetts</Button>
          </li>
          <li>
            <Button>New York</Button>
          </li>
          <li>
            <Button>Texas</Button>
          </li>
          <li>
            <Button>Florida</Button>
          </li>
          <li>
            <Button>North Carolina</Button>
          </li>
          <li>
            <Button>South Carolina</Button>
          </li>
          <li>
            <Button>California</Button>
          </li>
          <li>
            <Button>Ohio</Button>
          </li>
          <li>
            <Button>Kentucky</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
