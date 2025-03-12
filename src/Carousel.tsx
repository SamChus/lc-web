import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { cn } from "./lib/utils";

interface CarouselProps {
  slides: React.ReactNode[];
  classname?: string;
}

const Carousel: React.FC<CarouselProps> = ({ slides, classname }) => {
  const [isMobile, setIsMobile] = useState(false);

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
      navigation={true}
      modules={[Navigation]}
      slidesPerView={isMobile ? 1 : 2}
      className={cn("mySwiper", classname)}
      autoplay={{ delay: 3000 }}
    >
      {slides.map((slide, index) => {
        return <SwiperSlide key={index}>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Carousel;
