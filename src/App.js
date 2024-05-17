import React from 'react'
import {BrowserRouter,Routes,Route}
from 'react-router-dom';
import Home from './Home';
import Doctor from './Doctor';
import Patient from './Patient';
import Navigation from './Navigation';
import './App.css';

const App = () => {
  return (
  
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctor" element={<Doctor/>}/>
        <Route path="/patient" element={<Patient/>}/>
       
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
