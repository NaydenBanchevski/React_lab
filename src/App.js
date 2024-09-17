import "./App.css";
import EmployeePage from "./components/EmployeePage";
import { Homepage } from "./components/Homepage";

function App() {
  return (
    <div className="mainContainer">
      <Homepage />
      <EmployeePage />
    </div>
  );
}

export default App;
