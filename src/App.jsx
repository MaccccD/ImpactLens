import Home from './Pages/Home'
import Compliance from './Pages/Compliance';
import Recommendation from './Pages/Recommendation';
import Consulting from './Pages/Consulting';
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='*' element = {<Home/>}/>
    <Route path='/Compliance' element = {<Compliance/>}/>
    <Route path='/Consulting' element = {<Consulting/>}/>
    <Route path='/Recommendation' element = {<Recommendation/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
