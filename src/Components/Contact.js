import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-form my-5" id="contact">
        <form action="/">
          <h1 className="text-center">Contact Me</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <button type="button" class="btn btn-outline-warning">
            Submit
          </button>
          OR
          <div className="icons">
            <a
              href="https://www.instagram.com/__jas.g__/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://freelogopng.com/images/all_img/1658588801instagram-icon-png.png"
                alt="instagram"
              />
            </a>
            <a href="https://github.com/Jassayy" rel="noreferrer">
              <img
                src="https://icon-library.com/images/github-icon-svg/github-icon-svg-14.jpg"
                alt=""
              />
            </a>
            <a href="https://x.com/Grandslayerr">
              <img
                src="https://imagepng.org/wp-content/uploads/2018/08/twitter-icone.png"
                alt=""
              />
            </a>
          </div>
          OR Email me on jasgandhi2004@gmail.com
        </form>
      </div>
    </>
  );
}

export default Contact;
