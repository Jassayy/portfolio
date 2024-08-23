import React from "react";
import Netflix from "../Assets/netflixui.png";

function Project() {
  return (
    <>
      <div id="projects" className="container my-5 ">
        <h1>
          <span>Projects</span>
        </h1>
        <div className="projects">
          <div className="project">
            <div className="pro-image">
              <img src={Netflix} alt="netflix" />
            </div>
            <h1>Netflix UI Clone</h1>
            <p>
              A Netflix UI clone made with React JS which is responsive as well.
            </p>
            <div className="pro-but">
              <a
                href="https://github.com/Jassayy/netflixclone"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
                  alt="github"
                />
              </a>
              <a
                href="https://jassyproject1.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/014/441/338/original/external-link-icon-3d-design-for-application-and-website-presentation-png.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
