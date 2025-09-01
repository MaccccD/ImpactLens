import React from 'react';
import { useNavigate } from 'react-router-dom';

function Recommendation() {
  const nav = useNavigate();

    function Navigate(){
      nav("/Compliance");
    }
  return (
    <div>
      <h1>Recommendations Page</h1>
      Welcome to the Recommendations page!

      <button onClick={Navigate}>Home</button>
    </div>
  )
}

export default Recommendation
