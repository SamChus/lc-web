import { useEffect, useRef, useState } from "react";

const TestimoniesPage = () => {
  const testimonials = [
    {
      quote:
        "I want to thank God for keeping my family and I all through the year. I want to thank God for the life and health of my mum. For preserving and healing her of blood flow. I want to thank God for helping my mum pass her specialization exam in internal medicine. Thank you Jesus",
      author: "Pastor Anointing Okeke",
    },
    {
      quote:
        "I want to thank God for my long life. Stainance of my stay in school, saving my life at different times. Want to thank God for being faithful in His word, during 2023 December Goshen, Papa prophesied about someone acquiring a land, I want to thank God for making it possible",
      author: "God’swill Onyebuchi",
    },
    {
      quote:
        "I want to thank God for my life and that of my family. For his protection, divine provision and for granting my younger sister admission and bringing her down from Lagos to Abia state. I want to thank God for my academics and for granting me good grades, and for my business as well and I thank God for what he is about to do in my life. Thank you Jesus",
      author: "Sister Goodness Isiriguzu",
    },
    {
      quote:
        "I am standing to thank the lord for life and protection all this year. I want to thank the lord for delivering my sister from a marriage that would have ruined her life forever. I got a good news from my father though it was a bad news to my sister that the guy that wanted to marry her just did his traditional marriage on Sunday. I want to thank the lord also for granting her granting her favor through her pastor after this incident. Her pastor called her to choose between schooling and starting a business. I also want to thank the lord for healing. Yesterday Papa said we were going face attack but that the lord will give us power and Dominion to conquer, and yesterday I had a serious heart attack based on cold and lying on tiles, so I couldn't sleep though. I prayed and managed to sleep. This morning I got my healing when Papa Ayimson raised a song. I couldn't sing because of the heart pain but immediately I remembered the teaching on Dominion I took the microphone with faith and trust in God’s healing power. Now I am sound without any traces. Hallelujah",
      author: "Samuel Soromtochi",
    },
    {
      quote:
        "My mum has been terribly sick for the past few years. We have been praying. I told papa about it last year and he asked me to go and buy olive oil, then he prayed on it. My sister from Lagos also came back bringing an oil that her pastor gave her. We gave the two to our mum, now my mum is almost fully recovered. I have also been sick for almost every month from the last two years backward but coming last year I treated malaria twice, this year once and I know I won't treat at all next year. Since my SS1 I have had Ulcer which usually disturbs me regularly. I met Papa and told him about it. He have me a book “The Healing Balm” by Bishop David Oyedepo, after I read it I built faith for healing, then he prayed for me and since that last year I have only experience the heart burn few times",
      author: "Oguo Prince Emeaba",
    },
    {
      quote:
        "In January 2024 one of my results was released and I had an F, it was a mass failure. I got to Papa and he declared that even if I was the only one I would be exempted from the failure. Months passed and I told him about it and he asked me to relax. Finally he asked me to rewrite the course. I came for Apostolic Convention '24, on the 2nd day, Papa told us to ask God for three things we desired and I asked God to change my result, that night I had a dream and a man came to me and said so you want me to change your result and I said yes. Fast-forward to when I went back to school, I registered for the course, two days later I had a voice that said I will surprise you today. I went online to discover that the result of the department in that course had been wiped. On the day I was meant to write the carry over, a voice said to me to check your portal so that you would not end up wasting your transport money. Around 7:37 am I checked the result and it was a C. While I was still on that another result was released, this time it was a 00F, I reminded God that Papa declared that there would be no more carry overs. I engaged God in praise and the result was changed to an A. On October the enemy came and fought my health but God prevailed. Papa said to me that God would prosper me in the year 2024 and God showed Himself Faithful. May His name alone be praised, Amen.",
      author: "Chioma Onyekere",
    },
  ];

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll(".testimonial-card");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const slides = testimonials.map((testimonial, index) => (
    <div
      key={index}
      data-index={index}
      className={`testimonial-card block transition-opacity duration-700 ease-out ${
        visibleIndexes.includes(index)
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg text-center"
        title={testimonial.quote}
      >
        <p className="text-gray-600 italic text-lg mb-4 line-clamp-5">
          "{testimonial.quote}"
        </p>
        <p className="text-gray-800 font-semibold">{testimonial.author}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Testimonies
        </h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {slides}
        </div>
      </div>
    </section>
  );
};

export default TestimoniesPage;
