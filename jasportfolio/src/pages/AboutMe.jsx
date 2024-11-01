import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutMe = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".about-content",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
        <h1 className="font-bold text-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-center leading-relaxed">
          "Success is not final, failure is not fatal: it is the courage to
          continue that counts."
        </h1>
      </div>
      <div className="w-full md:w-1/2 p-10 flex items-center">
        <div
          className="about-content bg-white/30 backdrop-blur-md p-8 rounded-lg shadow-lg border border-white/20"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <h1 className="text-3xl font-bold text-center mb-5">About Me</h1>
          <p className="text-black text-lg mb-6">
            By day, I'm a dedicated Mechatronics Engineering student, diving
            deep into the fascinating world where mechanics, electronics, and
            computer science converge. But when the sun sets, I transform into a
            passionate coder, spending my nights crafting elegant solutions and
            bringing creative ideas to life through programming. This dual
            identity allows me to bridge the gap between hardware and software,
            creating innovative solutions that combine the best of both worlds.
          </p>
          <p className="text-black text-lg">
            Beyond the realm of engineering and coding, I'm deeply intrigued by
            the world of investing and financial markets. I believe that
            understanding both technology and finance is crucial in today's
            interconnected world. Whether I'm designing a robotic system,
            debugging code, or analyzing market trends, I'm always eager to
            learn and grow. This diverse range of interests not only makes me a
            more well-rounded individual but also helps me approach problems
            from multiple perspectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
