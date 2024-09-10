import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  useEffect(() => {
    const popoverTrigger = document.querySelector(".image img");
    const popover = new window.bootstrap.Popover(popoverTrigger, {
      trigger: "hover",
      content: "Hieee! It's me!",
      placement: "left",
    });

    return () => {
      popover.dispose();
    };
  }, []);

  return (
    <>
      <div className="top my-5">
        <div className="left text-center pt-3">
          <h1>
            Hi I'm <span>Jas</span>
          </h1>
          <h2>
            <TypeAnimation
              sequence={[
                "I am a Web Developer.",
                1000,
                "I am a Coding Enthusiast.",
                1000,
                "I am a Business Enthusiast",
                1000,
                "And much more!!!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <p>
            I love coding and sports, and even though I'm currently enrolled in
            mechatronics engineering, that doesn't stop me from coding. I'm
            especially passionate about React.js and enjoy working on projects
            that challenge and excite me.
          </p>
          <div className="buttons">
            <a
              href="https://drive.google.com/file/d/1_mQIgVdcQEgMPUj7O21lw-bGGVfNOHXg/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn-outline-warning">
                View Resume
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/jas-gandhi-265585202/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn-outline-info info-right">
                Connect with me
              </button>
            </a>
          </div>
        </div>
        <div className="right">
          <div
            className="image"
            data-bs-toggle="popover"
            data-bs-content="Hieee! It's me!"
          >
            <img
              src="https://cdn.dribbble.com/users/926537/screenshots/4502924/python-2.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
