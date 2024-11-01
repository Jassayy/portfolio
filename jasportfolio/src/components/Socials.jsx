import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Socials = () => {
  return (
    <div className="fixed right-10 bottom-10 flex flex-col gap-4">
      <button className="w-24 h-24 rounded-full overflow-hidden  transition-transform animate-spin ">
        <a
          href="https://www.linkedin.com/in/jasgandhiii/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-full h-full object-cover"
          />
        </a>
      </button>
      <button className="w-24 h-24 rounded-full overflow-hidden  transition-transform animate-spin duration-150">
        <a
          href="https://github.com/Jassayy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub"
            className="w-full h-full object-cover"
          />
        </a>
      </button>
    </div>
  );
};

export default Socials;
