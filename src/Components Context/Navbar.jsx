import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav>
        <Link to={"/"} style={{display: 'flex', color: "white", fontSize: 20, gap: 50, cursor: 'pointer'}}>Home</Link>
        <Link to={"/Compliance"} style={{display: "flex", color: "white", fontSize:   20, gap: 50, cursor:'pointer'}}>ESG Compliance</Link>
        <Link to={"/Consulting"} style={{display: "flex", color: "white", fontSize: 20, gap: 50, cursor: "pointer"}}>Consulting</Link>
        <Link to={"/Recommendations"} style={{display: "flex", color: "white", fontSize: 20, cursor: "pointer"}}>Recommendations</Link>
    </nav>
  )
}

export default Navbar
