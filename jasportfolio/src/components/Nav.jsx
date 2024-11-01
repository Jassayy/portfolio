import React from "react";

const Nav = () => {
  return (
    <div className="w-full h-20 bg-transparent flex px-10 fixed z-50">
      <div className="h-full items-end ml-auto flex">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jasgandhi2004@gmail.com">
          <button className="px-6 py-2 rounded-full font-medium text-white bg-black border-2 border-white hover:bg-white hover:text-black transition-all duration-300 mx-4 my-4">
            Hire Me!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
