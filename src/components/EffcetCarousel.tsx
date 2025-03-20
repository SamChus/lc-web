import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";

import "../index.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

// import required modules

export default function EffectCarousel() {


    const images = [img1, img2, img3, img4];


    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{ delay: 3000 }}
                className="h-[400px] w-[400px] mx-auto"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`image-${index}`} className="w-full"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
