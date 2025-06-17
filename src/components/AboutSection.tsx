import EffectCarousel from "./EffcetCarousel";
import { Link } from "react-router-dom";

interface AboutCompoProps {
  title: string;
  mission: string;
  vision: string[];
  images: string[];
}

const AboutSection = ({ title, mission, vision }: AboutCompoProps) => {
  return (
    <section className="bg-purple-50 py-16 px-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-left">
          <div>
            <h3 className="text-2xl font-semibold text-left text-gray-900 mb-4">
              Mandate
            </h3>
            <p className="text-gray-700 mb-4">{mission}</p>
            <Link to="/about" className="text-purple-600 font-semibold">
              Learn More
            </Link>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-left text-gray-900 mb-4">
              Our Vision and Mission
            </h3>
            <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-4 ">
              {vision.map((item, idx) => (
                <li className="leading-relaxed" key={idx}>
                  {item}
                </li>
              ))}
            </ol>

            <Link to="/about" className="text-purple-600 font-semibold">
              Learn More
            </Link>
          </div>
        </div>
        <EffectCarousel />
      </div>
    </section>
  );
};

export default AboutSection;
