import React from 'react';
import { useNavigate } from 'react-router-dom';

function Compliance() {
  const nav = useNavigate();
  
  
    function Navigate(){
      nav("/Compliance");
    }
  return (
    <div>
      <h1>ESG Compliance  Check!</h1>
     Welcome to the doccies upload page !
     <br/>
     <button onClick={Navigate}>Consulting Page</button>
    </div>
  )
}

export default Compliance;
