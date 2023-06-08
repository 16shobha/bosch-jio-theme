import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import FleetAging from "./components/Aging/FleetAging";
import Notification from "./components/History/Notification";
import ParticularFleet from "./components/ParticularFleet/ParticularFleet";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/aging" element={<FleetAging />} />
        <Route exact path="/notifications" element={<Notification />} />
        <Route exact path="/particularfleet" element={<ParticularFleet />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
