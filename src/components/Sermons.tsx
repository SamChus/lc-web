
import Carousel from './Carousel';

const Sermons = () => {
  const slides = [
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093568/lwc/s1_iarwzv.png"
      alt="Slide 1"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093567/lwc/s3_dfqjn5.png"
      alt="Slide 2"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093567/lwc/s2_g3sazw.png"
      alt="Slide 3"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093566/lwc/s4_alw5zy.png"
      alt="Slide 4"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093566/lwc/s5_ocxayj.png"
      alt="Slide 5"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093574/lwc/s9_gzn911.png"
      alt="Slide 6"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093569/lwc/s8_gbchox.png"
      alt="Slide 7"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093567/lwc/s6_au8fwv.png"
      alt="Slide 8"
      className="object-cover h-full w-full"
    />,
    <img
      src="https://res.cloudinary.com/ducmq0ftx/image/upload/v1746093568/lwc/s7_rbhk6u.png"
      alt="Slide 9"
      className="object-cover h-full w-full"
    />,
  ];

  return (
    <div className="container mx-auto py-12 sm:px-6 lg:px-8" id='sermons'>
      <h1 className="text-[32px] sm:text-[48px] font-[600px] text-center my-8">
        Sermons
      </h1>
      <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-4 lg:gap-8">
        <div className="flex flex-col justify-start p-4 lg:w-1/2 lg:p-10">
          <h2 className="text-[#B22E7B] py-3 font-normal text-[32px] leading-[100%] tracking-[0%]">
            Listen to Papa's Messages
          </h2>
          <p className="font-normal text-[40px] leading-[100%] tracking-[0%]">
            Download Apst. Francis Onyebuchi Messages
          </p>
          <a
            href="https://youtube.com/@lightworldairforce2023?si=cKaxLW_yuZn3i2tJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 transition-colors duration-300 text-white px-6 sm:px-8 py-3 rounded-lg flex items-center justify-center gap-4 w-[200px] sm:w-[280px] shadow-md bg-[#9C1FDB] hover:bg-[#9c1fdb9b]">
              Visit
            </button>
          </a>
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

export default Sermons;