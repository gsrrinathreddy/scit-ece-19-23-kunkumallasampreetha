import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Qualifications from './pages/Qualifications';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';
import Contactme from './pages/Contactme';
import Certifications from './pages/Certifications';
import Workshops from './pages/Workshops';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "Aboutus" element={<Aboutus/>}/>
        <Route path = "Qualifications" element={<Qualifications/>}/>
        <Route path = "Experience" element={<Experience/>}/>
        <Route path = "Skills" element={<Skills/>}/>
        <Route path = "Hobbies" element={<Hobbies/>}/>
        <Route path = "Contactme" element={<Contactme/>}/>
        <Route path = "Certifications" element={<Certifications/>}/>
        <Route path = "Workshops" element={<Workshops/>}/>

      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;

