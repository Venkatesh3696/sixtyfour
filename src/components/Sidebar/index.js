import React from "react";
import { IoMdSettings, IoMdSearch } from "react-icons/io";
import { MdHeadphones } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { BiSolidBuildings } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <p>d</p>
      </div>
      <ul className="sidebar-list">
        <li>
          <button type="button">
            <IoMdSearch className="sidebar-icons" />
          </button>
        </li>
        <li>
          <button type="button">
            <HiMiniComputerDesktop className="sidebar-icons" />
          </button>
        </li>
        <li>
          <button type="button">
            <FaRegCircleQuestion className="sidebar-icons" />
          </button>
        </li>
        <li>
          <button type="button">
            <IoMdCalendar className="sidebar-icons" />
          </button>
        </li>
        <li>
          <button type="button">
            <BiSolidBuildings className="sidebar-icons" />
          </button>
        </li>
        <li>
          <button type="button">
            <HiCurrencyDollar className="sidebar-icons" />
          </button>
        </li>
        <li>
          <button type="button">
            <MdHeadphones className="sidebar-icons" />
          </button>
        </li>
      </ul>
      <button className="settings-button">
        <IoMdSettings />
      </button>
    </div>
  );
};

export default Sidebar;
