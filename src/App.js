import "./App.css";
import React, {useEffect, useState} from 'react'
import LoginPage from "./components/Login/LoginPage";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import FleetAging from "./components/Aging/FleetAging";
import Notification from "./components/History/Notification";
import ParticularFleet from "./components/ParticularFleet/ParticularFleet";
import ParticularVehicle from "./components/ParticularVehicle/ParticularVehicle";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let location = useLocation();
  const[fid, setfid]=useState('');
  const[vid, setvid]=useState('');
  const[vtype,setvtype]=useState('');
  const[vfuel,setvfuel]=useState('');
  useEffect(()=>{
    console.log(location.pathname)
  },[location]);
  return (
    <>
 
   {!(location.pathname==="/") && <Navbar/>}
      <Routes>
       
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<LandingPage fid={fid} setfid={setfid}/>} />
        <Route exact path="/aging" element={<FleetAging />} />
        <Route exact path="/notifications" element={<Notification />} />
        <Route exact path="/particularfleet" element={<ParticularFleet fid={fid} vid={vid} setvid={setvid} vtype={vtype} vfuel={vfuel} setvtype={setvtype} setvfuel={setvfuel} />} />
        <Route exact path="/particularvehicle" element={<ParticularVehicle vid={vid} vtype={vtype} vfuel={vfuel} />} />
      </Routes>
      </>
  );
}

export default App;
