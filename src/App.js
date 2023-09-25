import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
function App() {
  // localStorage.setItem("name", "sam")
  // sessionStorage.setItem("id","123")
  return (
    <div className="App">
      <h1>Local Storage with Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <h2>Welcome to local Storage page {localStorage.getItem("name")}</h2>
        <h3>session storage id is {sessionStorage.getItem("id")}</h3> */}
    </div>
  );
}

export default App;
