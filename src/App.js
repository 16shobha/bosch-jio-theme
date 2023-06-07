import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import Welcomepage from "./components/Welcomepage/Welcomepage";
import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import FleetAging from "./components/Aging/FleetAging";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Welcomepage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/aging" element={<FleetAging />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
