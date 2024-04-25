import { BsCardHeading } from "react-icons/bs";
import "./index.css";

const LibraryCard = ({ details }) => {
  return (
    <li className="library-card-container">
      <BsCardHeading className="library-card-icon" />
      <p className="library-card-text">{details.text}</p>
      <p className="library-card-date">{details.date}</p>
    </li>
  );
};

export default LibraryCard;
