import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProjectPortfolio from './components/ProjectPortfolio';
import Footer from './components/Footer';
import PlanTrip from './components/PlanTrip';
import WeatherNews from './components/WeatherNews';


function App() {

  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<ProjectPortfolio />} />
          <Route path="/plantrip" element={<PlanTrip />} />
          <Route path="/news" element={<WeatherNews />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
