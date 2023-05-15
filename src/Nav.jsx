import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { colors, IconButton } from "@mui/material";

export default function Navbar() {
  const matches = useMediaQuery("(min-width:898px)");

  return (
    <nav className="nav-bar">
    <span>
      {matches === true ? (
       
          <div className="search-container">
            <input placeholder="Search" className="search-feild"></input>
            <button className="search-button">
              <SearchIcon />
            </button>
          </div>
          
      ) : (
        <button className="search-button2">
          <SearchIcon />
        </button>
      )}
    </span>
    <div className="user-details">
    <IconButton>
      <MailOutlineIcon />
    </IconButton>
    <IconButton>
      <NotificationsNoneIcon />
    </IconButton>
    <div className="divider"></div>
    <span>User Name</span>
    <img
      className="profile-pic"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI22ctO--7-kwxhVYYLp0iprSeaPlg5iqkAqRU0wR8&s"
    />
  </div>
</nav>
  );
}
