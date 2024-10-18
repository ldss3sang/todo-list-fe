import React from "react";
import "./GhostPopup.css";

const GhostPopup = ({ isVisible, onClose, detail }) => {
  if (!isVisible) return null;
    console.log("detail",detail);
  return (
    <div className="ghost-overlay" onClick={onClose}>
      <div className="ghost-popup" onClick={(e) => e.stopPropagation()}>
        <div className="ghost-eyes"></div>
        <div className="ghost-tail"></div>
        <p>Boo!</p>
        <h6>Task: {detail.task}</h6>
        <h6>Completed: {detail.isComplete ? "Yes" : "No"}</h6>
        <h6>Created: {detail.createdAt}</h6>
        <h6>Updated: {detail.updatedAt}</h6>
      </div>
    </div>
  );
};

export default GhostPopup;