
import Carousel from './Carousel';

const LocateBranch = () => {
  const slides = [
    <div
      key={1}
      className="slide relative font-[Poppins] font-semibold h-[425px] flex flex-col text-left"
    >
      <div className="h-2/3 rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745433638/lwc/lc-ph_gbipmj.png"
          alt="Slide 1"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between items-start text-blac px-4">
        <h3 className="text-xl md:text-2xl my-2">LC HQ, Portharcourt</h3>
        <p className="text-xs md:text-sm">
          Plot 373 Ikwerre Road, Market Junction Mile 4 Rumueme, Portharcourt
          City, Rivers State, Nigeria. Port Harcourt, Nigeria
        </p>
      </div>
    </div>,
    <div
      key={2}
      className="slide relative font-[Poppins] font-semibold h-[425px] flex flex-col text-left"
    >
      <div className="h-2/3 rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745433637/lwc/img39_u5tqbs.jpg"
          alt="Slide 2"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between items-start text-black px-4">
        <h3 className="text-xl md:text-2xl my-2">LC Umuahia</h3>
        <p className="text-xs md:text-sm">
          Plot 373 Ikwerre Road, Market Junction Mile 4 Rumueme, Portharcourt
          City, Rivers State, Nigeria. Port Harcourt, Nigeria
        </p>
      </div>
    </div>,
    <div
      key={4}
      className="slide relative font-[Poppins] font-semibold h-[425px] flex flex-col text-left"
    >
      <div className="h-2/3 rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745543321/lwc/lc-enugu_tdphqf.jpg"
          alt="Slide 4"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between items-start text-black px-4">
        <h3 className="text-xl md:text-2xl my-2">LC Enugu</h3>
        <p className="text-xs md:text-sm">
          Plot 373 Ikwerre Road, Market Junction Mile 4 Rumueme, Portharcourt
          City, Rivers State, Nigeria. Port Harcourt, Nigeria
        </p>
      </div>
    </div>,
    <div
      key={3}
      className="slide relative font-[Poppins] font-semibold h-[425px] flex flex-col text-left"
    >
      <div className="h-2/3 rounded-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1745433638/lwc/lc-asaba_uauiex.png"
          alt="Slide 3"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-between items-start text-black px-4">
        <h3 className="text-xl md:text-2xl my-2">LC Asaba</h3>
        <p className="text-xs md:text-sm">
          Plot 373 Ikwerre Road, Market Junction Mile 4 Rumueme, Portharcourt
          City, Rivers State, Nigeria. Port Harcourt, Nigeria
        </p>
      </div>
    </div>,
  ];

  return (
    <div className="container mx-auto py-12 sm:px-6 lg:px-8" id="branches">
      <h1 className="text-[32px] sm:text-[48px] font-[600px] text-center my-8">
        Locate A Branch
      </h1>
      <div className="flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
        <div className="flex flex-col justify-start p-4 lg:w-1/2 lg:p-10">
          <h2 className="text-[#B22E7B] py-3 font-normal text-[32px] leading-[100%] tracking-[0%]">
            Worship with us
          </h2>
          <p className="font-normal text-[40px] leading-[100%] tracking-[0%]">
            LC Branch Closest to you
          </p>
          <button className="mt-10 transition-colors duration-300 text-white px-6 sm:px-8 py-3 rounded-lg flex items-center justify-center gap-4 w-[200px] sm:w-[280px] shadow-md bg-[#9C1FDB]">
            Visit
          </button>
        </div>
        <Carousel
          slides={slides}
          classname="w-full max-w-[400px] lg:max-w-none"
          delay={3000}
          fillWhite
        />
      </div>
    </div>
  );
};

export default LocateBranch;