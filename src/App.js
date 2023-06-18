import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Archieves } from "./pages/Archieves/Archieves";

function App() {
  return (
    <div className="App">
      <NavLink to="/home">Home</NavLink> ||{" "}
      <NavLink to="/archieves">Archieves</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archieves" element={<Archieves />} />
      </Routes>
    </div>
  );
}

export default App;
