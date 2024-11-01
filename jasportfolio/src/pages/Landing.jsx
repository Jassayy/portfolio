import React from "react";
import background from "../assets/bg.png";
import AnimatedText from "../components/AnimatedText";

const Landing = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-no-repeat rounded-3xl shadow-3xl overflow-hidden flex justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <AnimatedText />
    </div>
  );
};

export default Landing;
