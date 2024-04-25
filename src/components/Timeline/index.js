import { Chrono } from "react-chrono";
import { timelineData } from "../../data";
import "./index.css";

const Timeline = () => {
  return (
    <Chrono
      // hideControls={true}
      toolbarPosition={false}
      controlPanel={false}
      className="timeline"
      items={timelineData}
      mode="VERTICAL"
    />
  );
};

export default Timeline;
