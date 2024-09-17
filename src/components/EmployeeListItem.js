import React from "react";
import "./styles.css";
const EmployeeListItem = ({ name, job }) => {
  return (
    <div className="employee-container">
      <div className="employee-img"></div>
      <div>
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
};

export default EmployeeListItem;
