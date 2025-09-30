import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Compliance() {
  const nav = useNavigate();
    function Navigate(){
      nav("/Consulting");

      //state variables for the Environmental Sevtion of the ESG Helath check.""
      const [electricityTrack, setElectricityTrack] = useState("");
      const [energyEfficiency, setEnergyEfficiency] = useState("");
      const [waterUsage, setWaterUsage] = useState("");
      const [recycling, setRecycling] = useState("");
      const [waterLandfill, setWaterLandfill] = useState("");
      const [renewableEnergy, setRenewableEnergy] = useState("");
      const [carbonFootprint, setCarbonFootprint] = useState("");


      const handleSave =() =>{
        if(!electricityTrack || !energyEfficiency || !waterUsage || !recycling || !waterLandfill || !renewableEnergy || !carbonFootprint === null){
          alert("Please fill out the required fields before saving!!");
          return;
        }
      }

      const environmentalLog = {
      electricityTrack,
      energyEfficiency,
      waterUsage,
      recycling,
      waterLandfill,
      renewableEnergy,
      carbonFootprint,
      date: new Date().toLocaleDateString('en-GB'),
    };

    // saving the environmental logs in local sotrage:
    const existingLogs = JSON.parse(localStorage.getItem("EnvironmentalLogs")) || [];
    const updatedLogs = [...existingLogs, environmentalLog];
    localStorage.setItem("EnvironmentalLogs", JSON.stringify(updatedLogs));

    //clear out all the fileds after saving :
    setElectricityTrack("");
    setEnergyEfficiency("");
    setWaterUsage("");
    setRecycling("");
    setWaterLandfill("");
    setRenewableEnergy("");
    setCarbonFootprint("");

    alert("Environmental Questions asnwered successfully!");

    }
  return (
    <div>
      <h1 className='heading'>ESG Compliance  Check</h1>

      <p className='content'>1. Does your business track monthly electricity consumption?</p>
       
    </div>
  )
}

export default Compliance;
