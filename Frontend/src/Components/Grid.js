import React, { useState } from "react";
import LiveVideo from "./LiveVideo";
import StudentVideo from "./StudentVideo";
import EmotionalStatus from "./EmotionalStatus";
import "./Grid.css";

const Grid = () => {
  const [emotionalStatus, setEmotionalStatus] = useState("");

  const handelEmotionalStatusChange = event =>
  {
    setEmotionalStatus(event.target.value)
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <LiveVideo></LiveVideo>
      </div>
      <div className="grid-item">
        <StudentVideo emotionalStatus = {emotionalStatus}></StudentVideo>
      </div>
      <div className="grid-item">
        <EmotionalStatus onEmotionalStatusChange = {handelEmotionalStatusChange}></EmotionalStatus>
      </div>
    </div>
  );
};

export default Grid;
