import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface CarouselProps {
  slides: React.ReactNode[];
  classname?: string;
  fill?: boolean;
  delay?: number;
  fillWhite?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  classname,
  delay = 3000,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Swiper requires at least slidesPerView + 1 slides for loop to work
  const slidesPerView = isMobile ? 1 : 2;
  const canLoop = slides.length > slidesPerView;

  return (
    <Swiper
      key={slides.length + "-" + slidesPerView} // force remount if slides change
      modules={[Navigation, Autoplay]}
      slidesPerView={slidesPerView}
      className={cn("mySwiper gap-8", classname)}
      autoplay={canLoop ? { delay } : false}
      spaceBetween={10}
      navigation={false}
      loop={canLoop}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}

    </Swiper>
  );
};

export default Carousel;
