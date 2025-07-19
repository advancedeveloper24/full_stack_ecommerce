import React from "react";
import Button from "@mui/material/Button";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdOutlineElectricalServices } from "react-icons/md";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1 ">
            <Button className="allCatTab">
              <span className="icon1">
                <BiSolidCategory />
              </span>
              <span className="text">All Categories</span>
              <span className="icon2">
                <IoIosArrowDropdownCircle />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2">
            <ul className="list list-inline w-100 ">
              <li className="list-inline-item">
                <Link to="/">
                  <FaHome />
                  <span>Home</span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <GiClothes />
                  <span>Fashion</span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <MdOutlineElectricalServices />
                  <span>Electronics</span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Bakery</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Grocery</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
