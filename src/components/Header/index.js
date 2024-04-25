import React from "react";
import { BsCalendar } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

import "./index.css";

const Header = () => {
  return (
    <header className="header-container">
      <ul className="header-list-container">
        <li className="header-list-item-container">
          <h2>Good Afternoon, Akshay</h2>
          <p>You are subscribed to Retail plan.</p>
        </li>
        <li className="header-list-item-container-2">
          <BsCalendar className="header-icon" />
          <h2>Today, 14 February</h2>
          <BsClock className="header-icon" />
          <h2>16:42 AM</h2>
          <IoMdNotificationsOutline className="header-icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
