import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

interface AboutCompoProps {
  title: string;
  mission: string;
  vision: string;
  images: string[];
}

const AboutSection = ({ title, mission, vision, images }: AboutCompoProps) => {
  return (
    <section className="bg-purple-50 py-16 px-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 mb-4">{mission}</p>
          <a href="#" className="text-purple-600 font-semibold">
            Learn More
          </a>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="w-full max-w-md"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="w-full max-w-md"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vision</h3>
          <p className="text-gray-700 mb-4">{vision}</p>
          <a href="#" className="text-purple-600 font-semibold">
            Learn More
          </a>
        </div>
        </div>
    </section>
  );
};

export default AboutSection;
