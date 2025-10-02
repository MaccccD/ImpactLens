import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Compliance() {
  const nav = useNavigate();
    function Navigate(){
      nav("/Consulting");
    }
      
      //state variables for the Environmental Section of the ESG Health check.""
      const [electricityTrack, setElectricityTrack] = useState("");
      const [energyEfficiency, setEnergyEfficiency] = useState("");
      const [waterUsage, setWaterUsage] = useState("");
      const [recycling, setRecycling] = useState("");
      const [wasteLandfill, setWasteLandfill] = useState("");
      const [renewableEnergy, setRenewableEnergy] = useState("");
      const [carbonFootprint, setCarbonFootprint] = useState("");

      const [ShowSocial, setShowSocial] = useState(true);
      const [HideEnvironmental, setHideEnvironmental] = useState(true);

      //state variables for the Social section of the ESG Health Check :
      const [writtenPolicy, setWrittenPolicy] = useState("");
      const [employeeFeedback, setEmployeeFeeback] = useState("");
      const [localComProject, SetLocalComProject] = useState("");
      const [skillsDevelopment, setSkillsDevelopment] = useState("");
      const [suppliers, SetSuppliers] = useState("");
      const [healthConditions, setHealthConditions] = useState("");
      const [labourPractices, setLabourPractice] = useState("");

      

      const SaveEnvironmental =() =>{
        if(!electricityTrack || !energyEfficiency || !waterUsage || !recycling || !wasteLandfill || !renewableEnergy || !carbonFootprint === null){
          alert("Please fill out the required fields before saving!");
          HideEnvironmental(false);
          ShowSocial(true);
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

    // saving the environmental logs in the local sotrage:
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

    alert("Environmental Questions answered successfully!")

    setShowSocial(false); // show the social questions 
    setHideEnvironmental(false); // hide the environmental questions

    //calling the toggle after saving for the environmental
    ToggleDisplay();
    }

       const SaveSocial =()=>{
      if(!writtenPolicy || !employeeFeedback || !localComProject || !skillsDevelopment || !suppliers || !healthConditions || !labourPractices === null){
        alert("Please ensure that you answer all the questions before saving!");
        return;
      }

      const socialLogs = {
        writtenPolicy,
        employeeFeedback,
        localComProject,
        skillsDevelopment,
        suppliers,
        healthConditions,
        labourPractices,
        date: new Date().toLocaleDateString("en-GB")
      }

      const existingLogs = JSON.parse(localStorage.getItem("SocialLogs")) || [];
      const updatedSocialLogs = [...existingLogs,socialLogs];
      localStorage.setItem("SocialLogs",JSON.stringify(updatedSocialLogs));
       console.log("the social logs would be showing now that this has happened");

      //after the above has been saved, clear the fields:
      setWrittenPolicy("");
      setEmployeeFeeback("");
      SetLocalComProject("");
      SetSuppliers("");
      setHealthConditions("");
      setLabourPractice("");

      console.log("the social logs would be showing now that this has happened");
    }


    //so here i'm trying to create a conditional rendering that will SHOW the social aspect of the questions but HIDE the environmental aspect of the questions:
    const ToggleDisplay = () =>{
     if(ShowSocial === true && HideEnvironmental === true){
     alert("The social questions show now be showing");
     console.log("yay,, this is working!!");
     }
     else{
      alert("Nope!!");
     // return;
     }
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
        <button onClick={SaveEnvironmental} className='nextBtn'>Save Entry</button><br/><br/>
        {/**The Social aspect Questions of the ESG Health Check: */}
        <div>
        <p className='content'>1. Do you have a written policy promoting diversity and equal opportunity?</p>
        <select className='setUp' onChange={(w)=> setWrittenPolicy(w.target.value)} value={writtenPolicy}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "In-Development">In-Development</option>
       </select>
       <br/>

        </div>
    </div>


  );
};

export default Compliance;
