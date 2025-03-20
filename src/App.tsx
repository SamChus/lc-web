import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeeklyProgram from "./components/WeeklyProgram";
import HeroSection from "./components/Hero";
import ServiceCountdown from "./components/ServiceCountdown";
import AboutSection from "./components/AboutSection";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import UpcomingEvent from "./components/UpcomingProgram";

function App() {
  const images = [img1, img2, img3, img4];

  const mission =
    "Raising Ambassadors of Generational Relevance by His Spirit; Word, Anointing, Wonders and Grace; Irrespective of background or educational disciplines, and making them permissible tools in the hand of God for a Charismatic and Global impact. \nPreaching the Apostolic Kingdom-Based message for the Empowerment of mankind across the nations of the earth and administering the revealed truths and mysteries of the kingdom inline with the Apostolic order as delivered to this commission.";

  const vision =
    "Reviving the elects through the word of possibilities, anointing and edification in Christ Jesus through the instrumentality of Global missions and sending missionaries to all nations of the earth and into all works of life for the full redemption of the total man unto dignity in Christ. \nEquipping the called for his calling; making him an apostolic vessel God can use through the establishing of ministerial and leadership institutions for the raising and empowering of kingdom giants for the fulfilments of their apostolic and global callings across the seven (7) world continents.";

  return (
    <BrowserRouter>
      <div className="mx-auto">
        {/* NAVIGATION */}
        <HeroSection />
        {/* <ServiceCountdown /> */}
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
        {/* MINISTRIES SECTION */}
        {/* FOOTER SECTION */}
        <div className="bg-[#792F9E] text-white py-12 px-6 md:px-16">
          <ContactUs />
          <div className="border-[.5px] border-[#ffffff4d] my-10 w-[90%] m-auto" />

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
