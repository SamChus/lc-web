import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeeklyProgram from "./WeeklyProgram";
import HeroSection from "./components/Hero";
import ServiceCountdown from "./components/ServiceCountdown";


function App() {
  

  return (
    <BrowserRouter>
    <div className="mx-auto">
      {/* NAVIGATION */}
      <HeroSection />
      <ServiceCountdown />
      {/* HERO SECTION */}
      {/* COUNTDOWN SECTION */}
      {/* PROGRAMS SECTION */}
      {/* WEEKLY PROGRAM SECTION */}
      <WeeklyProgram />
      {/* EVENTS SECTION */}
      {/* ABOUT SECTION */}
      {/* MEET OUR PRESIDENT SECTION */}
      {/* MINISTRIES SECTION */}
      {/* FOOTER SECTION */} 
    </div>
    </BrowserRouter>
  );
}

export default App;
