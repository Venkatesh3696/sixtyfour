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
          <h1>Good Afternoon, Akshay</h1>
          <p>You are subscribed to Retail plan.</p>
        </li>
        <li className="header-list-item-container">
          <BsCalendar />
          <h1>Today, 14 February</h1>
          <BsClock />
          <h1>16:42 AM</h1>
        </li>
        <li className="header-list-item-container">
          <IoMdNotificationsOutline />
        </li>
      </ul>
    </header>
  );
};

export default Header;
