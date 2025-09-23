import Home from './Pages/Home'
import Compliance from './Pages/Compliance';
import Recommendation from './Pages/Recommendation';
import Consulting from './Pages/Consulting';
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './Components Context/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/Compliance' element = {<Compliance/>}/>
    <Route path='/Consulting' element = {<Consulting/>}/>
    <Route path='/Recommendation' element = {<Recommendation/>}/>
    <Route path='*' element = {<Home/>}/> 
   </Routes>
   </BrowserRouter>
  )
}

export default App
