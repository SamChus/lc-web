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
import Sermons from "./components/Sermons";
import BuildingProject from "./components/BuildingProject";
import Testimonies from "./components/Testimonies";
// import Airtable from "airtable";

// const base = new Airtable({
//   apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
// }).base(import.meta.env.VITE_AIRTABLE_BASE);


function App() {
  const images = [img1, img2, img3, img4];

  const mission =
    "Raising Ambassadors (Apostolic Kingdom-Based Believers) of Generational Relevance by His Spirit; In Word, Anointing, Wonders and Grace; Irrespective of background or educational disciplines, and making them permissible tools in the hand of God for a Global impact and Apostolic impact.";



  const vision = [
    "Preaching the Apostolic Kingdom-Based message for the Empowerment of mankind across the nations of the earth and administering the revealed truths and mysteries of the kingdom in-line with the Apostolic order as delivered to this commission.",
    "Planting of full gospel Apostolic Kingdom-Based and Charismatic Churches to be known as LIGHTWORLD CITY CHRISTIAN CENTER & THE EMPOWERMENT PLACE INTERNATIONAL MINISTRY WORLDWIDE Across the nations of the earth.",
    "Equipping the called for his calling; making him an apostolic vessel God can use through the establishing of Global Discipleship Systems (GDS), Ministerial and leadership institutions for the raising and empowering of kingdom giants for the fulfilments of their apostolic and global callings across the seven (7) world continents.",
    "Reviving the elects through the word of possibilities, anointing and edification in Christ Jesus through the instrumentality of Global missions and sending missionaries to all nations of the earth and into all works of life for the full redemption of the total man unto dignity in Christ."
  ];

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
        <Sermons />
        <Testimonies />
        <BuildingProject />
       
       
      </div>
  );
}

export default App;
