import React from 'react';
import { useNavigate } from 'react-router-dom';

function Compliance() {
  const nav = useNavigate();
  
  
    function Navigate(){
      nav("/Consulting");
    }
  return (
    <div>
      <h1 className='heading'>ESG Compliance  Check</h1>
       
    </div>
  )
}

export default Compliance;
