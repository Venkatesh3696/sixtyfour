import { options } from "../../data";
import Timeline from "../Timeline";
import "./index.css";

const TimelineContainer = ({ onChangeSelectOption, selectedCountry }) => {
  const onChangeSelect = (e) => {
    onChangeSelectOption(e.target.value);
  };
  return (
    <div className="timeline-container">
      <div className="timeline-selction-container">
        <h2>Recent Releases</h2>
        <select value={selectedCountry} onChange={onChangeSelect}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <hr />
      <Timeline className="timeline-item-container" />
    </div>
  );
};

export default TimelineContainer;
