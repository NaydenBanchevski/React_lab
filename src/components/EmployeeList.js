import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import "./styles.css";

const EmployeeList = () => {
  return (
    <div className="employeeList">
      <EmployeeListItem name="James King" job="President and CEO" />
      <EmployeeListItem name="Julie Taylor" job="VP of Marketing" />
      <EmployeeListItem name="Eugene Lee" job="CFO" />
      <EmployeeListItem name="John Williams" job="VP of Engineering" />
      <EmployeeListItem name="Ray Moore" job="VP of Sales" />
      <EmployeeListItem name="Paul Jones" job="QA Manager" />
    </div>
  );
};
export default EmployeeList;
