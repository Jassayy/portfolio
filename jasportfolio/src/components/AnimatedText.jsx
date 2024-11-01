import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedText = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const rotateX = ((clientY - centerY) / centerY) * 35;
      const rotateY = -((clientX - centerX) / centerX) * 35;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="perspective-[1000px] h-[80%] w-[90%] md:w-[70%] lg:w-[50%]">
      <div
        ref={cardRef}
        className=" h-full w-full p-2 rounded-lg transform-style-preserve-3d hover:scale-105 text-center flex flex-col justify-center"
      >
        <h1 className="font-bold text-white mb-2 md:mb-4 uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[8vh]">
          "Every journey begins
        </h1>
        <h1 className="font-bold text-white mb-2 md:mb-4 uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[8vh]">
          with a single step,
        </h1>
        <h1 className="font-bold text-white mb-2 md:mb-4 uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[8vh]">
          but every step
        </h1>
        <h1 className="font-bold text-white uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[8vh]">
          reshapes the destination."
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;
