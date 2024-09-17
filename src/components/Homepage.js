import React from "react";
import "./styles.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export const Homepage = () => {
  return (
    <div className="container">
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </div>
  );
};
