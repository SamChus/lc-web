import { Link } from "react-router-dom";

const BuildingProject = () => {
  return (
    <div className="container mx-auto py-12 sm:px-6 lg:px-8" id="sermons">
      <h1 className="text-[32px] sm:text-[48px] font-[600px] text-center my-8">
        Building Project
      </h1>
      <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-4 lg:gap-8">
        <div className="flex flex-col justify-start p-4 lg:w-1/2 lg:p-10">
          <h2 className="text-[#B22E7B] py-3 font-normal text-[32px] leading-[100%] tracking-[0%]">
            Support Our Building Project
          </h2>
          <p className="font-normal text-[40px] leading-[100%] tracking-[0%]">
            Building of Lightworld City Headquarter
          </p>
          <Link
            to="/give"
            className="mt-10 transition-colors duration-300 text-white px-6 sm:px-8 py-3 rounded-lg flex items-center justify-center gap-4 w-[200px] sm:w-[280px] shadow-md bg-[#CC2586] hover:bg-[#CC25869b]"
          >
            Give Online
          </Link>
        </div>
        <div className="w-full h-[300PX]">
          <iframe
            src="https://www.youtube.com/embed/8mLYClvlozU"
            title="LC PH Church foundation laying 2025"
            style={{ border: "0" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="no-referrer"
            allowFullScreen
            className="w-full h-[300px]"
          ></iframe>
        </div>{" "}
      </div>
    </div>
  );
};

export default BuildingProject;
