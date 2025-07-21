import { ReactElement, use, useCallback, useContext } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import Navigation from "./Navigation/Navigation";
import Button from "@mui/material/Button";
import { FaUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>Covid-19</b> epidemic, orders may be processed with
              a slight delay.
            </p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2">
                {context.countryList.length !== 0 && <CountryDropdown />}

                <SearchBox />

                <div className="part3 d-flex align-items-center mx-auto">
                  <Button className="circle m-3">
                    <FaUser />
                  </Button>
                  <div className="mx-auto cartTab d-flex align-items-center">
                    <span className="price">$31.09</span>
                    <div className="position-relative">
                      <Button className="circle m-3">
                        <FaCartArrowDown />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
