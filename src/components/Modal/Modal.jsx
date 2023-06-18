import React from "react";
import "./Modal.css";

export const Modal = ({ children }) => {
  return (
    <div className="modal-container">
      <div className="modal-children">{children}</div>
    </div>
  );
};
