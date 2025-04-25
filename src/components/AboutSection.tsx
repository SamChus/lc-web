import EffectCarousel from "./EffcetCarousel";

interface AboutCompoProps {
  title: string;
  mission: string;
  vision: string;
  images: string[];
}

const AboutSection = ({ title, mission, vision }: AboutCompoProps) => {
  return (
    <section className="bg-purple-50 py-16 px-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div>
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-4">{mission}</p>
            <a href="#" className="text-purple-600 font-semibold">
              Learn More
            </a>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">
              Vision
            </h3>
            <p className="text-gray-700 mb-4">{vision}</p>
            <a href="#" className="text-purple-600 font-semibold">
              Learn More
            </a>
          </div>
        </div>
        <EffectCarousel />
      </div>
    </section>
  );
};

export default AboutSection;
