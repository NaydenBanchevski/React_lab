import React from "react";
import Header from "./Header";
import Employee from "./Employee";
import Contact from "./Contact";

const EmployeePage = () => {
  return (
    <div className="container">
      <Header title="Employee" />
      <Employee />
      <Contact contact="Call Office" details="(123) 456-7890" />
      <Contact contact="Call Mobile" details="(987) 654-3210" />
      <Contact contact="SMS" details="(123) 456-7890" />
      <Contact contact="Email" details="abv@gmail.com" />
    </div>
  );
};

export default EmployeePage;
