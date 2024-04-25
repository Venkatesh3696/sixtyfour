import React, { useState } from "react";
import { IoMdSettings, IoMdSearch } from "react-icons/io";
import { MdHeadphones } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { BiSolidBuildings } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import "./index.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonText = isOpen ? "<" : ">";
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="open-button" onClick={() => setIsOpen(!isOpen)}>
        {buttonText}
      </button>

      <div className="logo-container">
        <p>d</p>
      </div>
      <ul className="sidebar-list">
        <li>
          <IoMdSearch className="sidebar-icons" />
          <p className="open-bar-text">Search</p>
        </li>
        <li>
          <HiMiniComputerDesktop className="sidebar-icons" />
          <p className="open-bar-text">Browse</p>
        </li>
        <li>
          <FaRegCircleQuestion className="sidebar-icons" />
          <p className="open-bar-text">Help</p>
        </li>
        <li>
          <IoMdCalendar className="sidebar-icons" />
          <p className="open-bar-text">date</p>
        </li>
        <li>
          <BiSolidBuildings className="sidebar-icons" />
          <p className="open-bar-text">Office</p>
        </li>
        <li>
          <HiCurrencyDollar className="sidebar-icons" />
          <p className="open-bar-text">Pricing</p>
        </li>
        <li>
          <MdHeadphones className="sidebar-icons" />
          <p className="open-bar-text">Audio</p>
        </li>
      </ul>
      <button className="settings-button sidebar-icons">
        <IoMdSettings />
        <p className="open-bar-text">Settings</p>
      </button>
    </div>
  );
}

export default Sidebar;
