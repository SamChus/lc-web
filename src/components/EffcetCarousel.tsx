
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
  const images = [
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421970/lwc/img14_s3dfku.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745433637/lwc/img38_zpo4a4.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421939/lwc/img6_mg0ju7.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745422076/lwc/img30_asrwzz.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421941/lwc/img3_htqh98.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421951/lwc/img7_s0gjto.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421960/lwc/img11_adqoio.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745422130/lwc/img34_lliwk9.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421952/lwc/img10_wjvwmo.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421964/lwc/img12_ne7uw2.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421970/lwc/img15_qo16gt.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421980/lwc/img18_hwui62.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745421981/lwc/img19_e8yp67.jpg",
    "https://res.cloudinary.com/ducmq0ftx/image/upload/v1745422012/lwc/img25_uqayae.jpg",
  ];


  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="h-[500px] w-[280px] mx-auto overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`image-${index}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
