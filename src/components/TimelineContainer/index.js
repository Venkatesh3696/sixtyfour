import { options } from "../../data";
import Timeline from "../Timeline";
import "./index.css";

const TimelineContainer = () => {
  return (
    <div className="timeline-container">
      <div>
        <h2>Recent Releases</h2>
        <select>
          {options.map((option, index) => {
            console.log("option==>>", option);
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <hr />
      <Timeline />
    </div>
  );
};

export default TimelineContainer;
