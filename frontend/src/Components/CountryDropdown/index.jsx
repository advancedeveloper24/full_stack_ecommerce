import React, { useState, useEffect, useContext, use } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { IoSearchCircle } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { MyContext } from "../../App";

const CountryDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setselectedTab] = useState(null);

  const [countryList, setcountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index) => {
    setselectedTab(index);
    setIsModalOpen(false);
  };

  useEffect(() => {
    setcountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    const list = [];
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsModalOpen(true)}>
        <div className="info d-flex flex-column">
          <span className="label"> Your Location </span>
          <span className="name"> United States </span>
        </div>
        <span className="ml-auto">
          <IoIosArrowDropdownCircle />
        </span>
      </Button>

      <Dialog open={isModalOpen} className="locationModal">
        <h3>Choose your delivery options!</h3>
        <p>Enter your address and we will specify your options.</p>
        <Button className="close" onClick={() => setIsModalOpen(false)}>
          <IoCloseSharp />
        </Button>
        <div className="headerSearch">
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoSearchCircle />
          </Button>
        </div>

        <ul className="countryList">
          {context.countryList?.length !== 0 &&
            context.countryList?.map((item, index) => {
              return (
                <li
                  className={` ${selectedTab === index ? "active" : ""} `}
                  key={index}
                >
                  <Button onClick={() => selectCountry(index)}>
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
