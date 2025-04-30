import "./App.css";

import WeeklyProgram from "./components/WeeklyProgram";
import HeroSection from "./components/Hero";
import ServiceCountdown from "./components/ServiceCountdown";
import AboutSection from "./components/AboutSection";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

import UpcomingEvent from "./components/UpcomingProgram";
import MinistriesSection from "./components/MinistriesSection";
import LocateBranch from "./components/LocateBranch";
import PresidentSection from "./components/PresidentSection";

function App() {
  const images = [img1, img2, img3, img4];

  const mission =
    "Raising Ambassadors of Generational Relevance by His Spirit; Word, Anointing, Wonders and Grace; Irrespective of background or educational disciplines, and making them permissible tools in the hand of God for a Charismatic and Global impact.";

  const vision =
    "Reviving the elects through the word of possibilities, anointing and edification in Christ Jesus through the instrumentality of Global missions and sending missionaries to all nations of the earth and into all works of life for the full redemption of the total man unto dignity in Christ.";

  return (

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
        <UpcomingEvent />
        {/* ABOUT SECTION */}
        <AboutSection
          title="About"
          mission={mission}
          vision={vision}
          images={images}
        />
        {/* MEET OUR PRESIDENT SECTION */}
        <PresidentSection />
        {/* MINISTRIES SECTION */}
        <MinistriesSection />
        {/* LOCATE A BRANCH SECTION */}
        <LocateBranch />
        {/* TESTIMONIES SECTION */}
        {/* CONTACT US SECTION */}  
        {/* FOOTER SECTION */}
       
      </div>
  );
}

export default App;
