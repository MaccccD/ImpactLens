import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {

  const nav = useNavigate();


  function Navigate(){
    nav("/Compliance");
  }
  return (
    <div>
     <h1>Helloooooo, Welcome to Impact Lens!</h1>
  
     <p>A student-led, AI-assisted consulting service that helps Johannesburg SMEs 
        adopt practical, low-cost Environmental, Social and Governance (ESG) practices. 
      <br/><br/>
      <button onClick={Navigate}>Compliance Check</button>
     </p>
    </div>
  )
}

export default Home;
