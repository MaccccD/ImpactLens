import React from 'react';
import { useNavigate } from 'react-router-dom';

function Consulting() {
  const nav = useNavigate();
  
  
    function Navigate(){
      nav("/Recommendation");
    }
  return (
    <div>
      <h1>Consulting Page</h1>
      Welcome to the AI chat bot consult page ( should be more genarlized for prvidding assitance with the app or system ! meant)

      <br/><br/>
      <button onClick={Navigate}>Recommendations</button>
    </div>
  )
}

export default Consulting;
