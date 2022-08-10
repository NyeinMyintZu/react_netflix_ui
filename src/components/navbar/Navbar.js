import "./navbar.scss";
import React, { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div classname="left">
          <img
            className="left-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="img"
          />
          <span className="left-span">Homepage</span>
          <span className="left-span">Series</span>
          <span className="left-span">Movies</span>
          <span className="left-span">New and Popular</span>
          <span className="left-span">My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <a href="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
            <img
              src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </a>
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setting</span>
              <br></br>
              <a href="/login">
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
