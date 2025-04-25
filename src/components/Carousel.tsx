import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

import { cn } from "../lib/utils";

// import ChveronLeftFilled from "../assets/Chevronfill-left.png";
// import ChveronRightFilled from "../assets/Chevronfill-right.png";
// import ChveronLeft from "../assets/Chevron-Left.png";
// import ChveronRight from "../assets/Chevron-Right.png";




interface CarouselProps {
  slides: React.ReactNode[];
  classname?: string;
  fill?: boolean;
  delay?: number;
  fillWhite?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ slides, classname, fill, delay, fillWhite }) => {
  const [isMobile, setIsMobile] = useState(false);
  const swiper = useSwiper();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Set initial value
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={isMobile ? 1 : 2}
      className={cn("mySwiper gap-8", classname)}
      autoplay={{ delay }} // Enable automatic slide
      spaceBetween={10} // Add space between slides
      navigation={{
        // Add navigation buttons
        nextEl: ".swiper-button-next fill fillWhite",
        prevEl: ".swiper-button-prev fill fillWhite",
        
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      <div
        className={cn("swiper-button-next", fill && "fill", fillWhite && "fillWhite")}
        onClick={() => swiper.slideNext()}
      ></div>
      <div
        className={cn("swiper-button-prev", fill && "fill", fillWhite && "fillWhite")}
        onClick={() => swiper.slidePrev()}
      ></div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          height: 60px;
          width: 60px;
          color: #fb0e98;
          font-size: 14px;
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev {
          left: 10px;
        }

        .fill {
          background-color: #fb0e98;
          color: white;
        }

        .fillWhite {
          background-color: white;
          color: #9C1FDB;
      `}</style>
    </Swiper>
  );
};

export default Carousel;
