import "./App.css";
import React, {useEffect} from 'react'
import LoginPage from "./components/Login/LoginPage";
import { Routes, Route, HashRouter,useLocation } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import FleetAging from "./components/Aging/FleetAging";
import Notification from "./components/History/Notification";
import ParticularFleet from "./components/ParticularFleet/ParticularFleet";
import Navbar from "./components/Navbar/Navbar";
function App() {
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location]);
  return (
    <>
 
   {!(location.pathname==="/") && <Navbar/>}
      <Routes>
       
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<LandingPage />} />
        <Route exact path="/aging" element={<FleetAging />} />
        <Route exact path="/notifications" element={<Notification />} />
        <Route exact path="/particularfleet" element={<ParticularFleet />} />
      </Routes>
      </>
  );
}

export default App;
