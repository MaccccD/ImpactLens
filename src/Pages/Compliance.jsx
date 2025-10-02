import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Compliance() {
  const nav = useNavigate();
    function Navigate(){
      nav("/Consulting");
    }
      
      //state variables for the Environmental Sevtion of the ESG Helath check.""
      const [electricityTrack, setElectricityTrack] = useState("");
      const [energyEfficiency, setEnergyEfficiency] = useState("");
      const [waterUsage, setWaterUsage] = useState("");
      const [recycling, setRecycling] = useState("");
      const [wasteLandfill, setWasteLandfill] = useState("");
      const [renewableEnergy, setRenewableEnergy] = useState("");
      const [carbonFootprint, setCarbonFootprint] = useState("");


      const handleSave =() =>{
        if(!electricityTrack || !energyEfficiency || !waterUsage || !recycling || !waterLandfill || !renewableEnergy || !carbonFootprint === null){
          alert("Please fill out the required fields before saving!");
          return;
        }
      

        const environmentalLog = {
        electricityTrack,
        energyEfficiency,
        waterUsage,
        recycling,
        wasteLandfill,
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
    setWasteLandfill("");
    setRenewableEnergy("");
    setCarbonFootprint("");

    alert("Environmental Questions answered successfully!");
    
    }

   return ( 
    <div>
      <p className='content'>1. Does your business track monthly electricity consumption?</p>
        <select className='setUp' onChange={(b)=> setElectricityTrack(b.target.value)} value={electricityTrack}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Not Sure">Not sure</option>
       </select>
       <br/>
       <p className='content'>2. Do you use energy-efficient lighting or appliances ?</p>
        <select className='setUp' onChange={(e)=> setEnergyEfficiency(e.target.value)} value={energyEfficiency}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Partially">Partially</option>
       </select>
       <br/>
       <p className='content'>3. Have you taken steps to reduce water usage (e.g. rainwater, harvesting, low-flow taps) ?</p>
        <select className='setUp' onChange={(w)=> setWaterUsage(w.target.value)} value={waterUsage}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Planning to">Planning To</option>
       </select>
       <br/>
       <p className='content'>4. Do you recycle paper, plastics, glass or e-waste ?</p>
        <select className='setUp' onChange={(r)=> setRecycling(r.target.value)} value={recycling}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Sometimes">Sometimes</option>
       </select>
       <br/>
       <p className='content'>5. Do you monitor and aim to reduce watse sent to landfill sites?</p>
        <select className='setUp' onChange={(w)=> setWasteLandfill(w.target.value)} value={wasteLandfill}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Not Yet">Not Yet</option>
       </select>
       <br/>
       <p className='content'>6. Have you considered using renewable energy (e.g. solar)?</p>
        <select className='setUp' onChange={(r)=> setRenewableEnergy(r.target.value)} value={renewableEnergy}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Already Using">Already Using</option>
       </select>
       <br/>
       <p className='content'>7. Do you track your business's carbon footprint?</p>
        <select className='setUp' onChange={(c)=> setCarbonFootprint(c.target.value)} value={carbonFootprint}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Interested but don't know how">Interested but don't know how to</option>
       </select>
       <br/>
        <button onClick={handleSave} className='nextBtn'>Save Entry</button><br/><br/>
    </div>
  )
}
export default Compliance;
