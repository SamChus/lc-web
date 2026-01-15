import Carousel from "./Carousel";
// import ImageOne from "../assets/up1.png";
// import ImageTwo from "../assets/up2.png";
// import ImageThree from "../assets/up3.png";
import img from "../assets/ims.jpg"
import { Link } from "react-router-dom";

const UpcomingEvent = () => {
  const slides = [
    <div key={1} className="slide h-[456px]">
      <img src={img} alt="Slide 1" />
    </div>,
    // <div key={2} className="slide h-[456px]">
    //   <img src={ImageOne} alt="Slide 2" />
    // </div>,
    // <div key={3} className="slide h-[456px]">
    //   <img src={ImageTwo} alt="Slide 3" />
    // </div>,
    // <div key={4} className="slide h-[456px]">
    //   <img src={ImageThree} alt="Slide 4" />
    // </div>,
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
        <Carousel slides={slides} classname="w-full" delay={10000} />
        <div className="flex flex-col justify-center p-4 lg:w-1/2 lg:p-10">
          <h2 className="text-[#B22E7B] text-[32px] py-3">UPCOMING PROGRAMS</h2>
          <p className="text-[40px] mb-2">INTENTIONAL MINISTERS' SUMMIT (IMS) 2026</p>
          <p className="text-gray-600 mb-6">Join us for powerful worship, transformative teaching, and divine encounters</p>
          <div className="flex flex-col gap-3">
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSeV4qYOPu92DyNLVLVIO7yOwTJwNFLkzqBKaO0g76kx5kqBrA/viewform"
              className="w-full max-w-[320px] bg-gradient-to-r from-[#9C1FDB] to-[#B22E7B] text-white px-8 py-4 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              REGISTER FOR MINISTERS' SUMMIT (IMS)
            </Link>
            <Link
              to="/programs"
              className="w-full max-w-[320px] border-2 border-[#9C1FDB] text-[#9C1FDB] px-8 py-4 rounded-lg font-semibold text-center hover:bg-[#9C1FDB] hover:text-white transition-all duration-300"
            >
              VIEW ALL PROGRAMS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
