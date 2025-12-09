import React from 'react';
import { useState } from 'react';
import { data, useNavigate } from 'react-router-dom';

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
      const [labourPractices, setLabourPractices] = useState("");

      // state variables for the Governance section of the ESG Health Check:
      const [codeofEthics, setCodeofEthics] = useState("");
      const [financialRecords, setFinancialRecods] = useState("");
      const [dataProtection, setDataProtection] = useState("");
      const[leadershipStructure, setLeadershipStructure] = useState("");
      const[riskAsssessment, setRiskAssessment] = useState("");
      const [definedSustainability, setDefinedSustainability] = useState("");

      //scoring logic variables:
      const [scoring, setScoring] = useState(0);
      
      const MaximumScores = {
        Yes : 2,
        AlreadyUsing : 2,
        Fully: 2
      }

      const MinimumScores = {
        Sometimes: 1,
        Partially: 1,
        PlanningTo: 1,
        InProgress: 1
      }

      const lowScore = 
      {
        No: 0,
        NotSure: 0,
        NotYet: 0
      }
      


      

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
      setLabourPractices("");

      console.log("the social logs would be showing now that this has happened");
    }

    const SaveGovernance = ()=> {
      if(!codeofEthics || !financialRecords || !dataProtection || !leadershipStructure ||!riskAsssessment || !definedSustainability === null){
        alert("Please ensure that you answer the fields before saving!");
        return;
      }
    

    const governanceLogs = {
      codeofEthics,
      financialRecords,
      dataProtection,
      leadershipStructure,
      riskAsssessment,
      definedSustainability,
      date: new Date().toLocaleDateString("en-GB")
    }

    const existingLogs = JSON.parse(localStorage.getItem("governanceLogs")) || [];
    const updatedGovernanceLogs = [...existingLogs,governanceLogs];  //savings the governance logs in the exisiting logs storage and storing that as the updated logs 
    localStorage.setItem("GovernanceLogs",JSON.stringify(updatedGovernanceLogs));

    setCodeofEthics("");
    setFinancialRecods("");
    setDataProtection("");
    setLeadershipStructure("");
    setRiskAssessment("");
    setDefinedSustainability("");


    console.log("the governance logs are working if this is showing!");
  };

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
      <h1 className='heading'>Environmental Check:</h1>
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
        <br/>
        <div>
          <h1 className='heading'>Social Health Check:</h1>
          <br/>
        <p className='content'>1. Do you have a written policy promoting diversity and equal opportunity?</p>
        <select className='setUp' onChange={(w)=> setWrittenPolicy(w.target.value)} value={writtenPolicy}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "In-Development">In-Development</option>
       </select>
       <br/>
        <p className='content'>2. Is there a system for employee feedback or grievance reporting?</p>
        <select className='setUp' onChange={(e)=> setEmployeeFeeback(e.target.value)} value={employeeFeedback}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Informal Only">Informal</option>
       </select>
       <br/>
        <p className='content'>3. Does your business support local community projects or charities?</p>
        <select className='setUp' onChange={(l)=> SetLocalComProject(l.target.value)} value={localComProject}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Occasionally">Occasionally</option>
       </select>
       <br/>
        <p className='content'>4. Do you offer skills development or training opportunities for employees?</p>
        <select className='setUp' onChange={(s)=> setSkillsDevelopment(s.target.value)} value={skillsDevelopment}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Sometimes">Sometimes</option>
       </select>
       <br/>
        <p className='content'>5. Are the majority of your suppliers local or from previously disadvantaged groups?</p>
        <select className='setUp' onChange={(s)=> SetSuppliers(s.target.value)} value={suppliers}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Some-Are">Some-Are</option>
       </select>
       <br/>
        <p className='content'>6. Do you ensure safe and healthy working conditions for all staff?</p>
        <select className='setUp' onChange={(h)=> setHealthConditions(h.target.value)} value={healthConditions}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Partially">Partially</option>
       </select>
       <br/>
        <p className='content'>7. Does your business have a stated commitment to fair labour practices?</p>
        <select className='setUp' onChange={(l)=> setLabourPractices(l.target.value)} value={labourPractices}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "Not-Formalized">Not-Formalized</option>
       </select>
       <br/>
       <br/>
        <button onClick={SaveSocial} className='nextBtn'>Save Entry</button><br/><br/>
        </div>

        <br/>
         {/**The Governance aspect Questions of the ESG Health Check: */}
          <h1 className='heading'>Governance Health Check:</h1>
          <br/>
        <p className='content'>1. Do you have a clear code of ethics or anti-corruption policy ?</p>
        <select className='setUp' onChange={(w)=> setWrittenPolicy(w.target.value)} value={writtenPolicy}>
        <option value="">Select answer below:</option>
        <option value= "Yes">Yes</option>
        <option value= "No">No</option>
        <option value= "In-Development">In-Development</option>
       </select>
       <br/>
       
    </div>
  );
};

export default Compliance;
