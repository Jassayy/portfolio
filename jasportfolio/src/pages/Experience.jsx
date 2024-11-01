import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".experience-card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".experience-container",
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen bg-transparent py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Professional Experience
        </h1>

        <div className="space-y-8 experience-container">
          <div className="experience-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              Controls and Instrumentation Engineer - Intern
            </h2>
            <h3 className="text-xl text-gray-600 mb-2">
              Adani - Dahanu Thermal Power Station
            </h3>
            <p className="text-gray-500 mb-4">June 2024 - July-2024</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Managed and maintained critical UPS systems throughout the power
                plant, ensuring uninterrupted power supply for essential
                operations
              </li>
              <li>
                Oversaw preventive maintenance and troubleshooting of Feed Water
                Pumps, optimizing their performance and reliability
              </li>
              <li>
                Conducted regular inspections and maintenance of Soot Blowers
                and auxiliary equipment to maintain optimal plant efficiency
              </li>
              <li>
                Collaborated on an IoT-based home automation system, integrating
                smart sensors and controls for enhanced energy efficiency
              </li>
            </ul>
          </div>

          <div className="experience-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              Web Developer - Intern
            </h2>
            <h3 className="text-xl text-gray-600 mb-2">Intrainz</h3>
            <p className="text-gray-500 mb-4">March 2023 - April 2023</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Got introduced to web development fundamentals and learned HTML,
                CSS, and JavaScript through hands-on training
              </li>
              <li>
                Developed two basic web projects to strengthen understanding of
                core web technologies and best practices
              </li>
              <li>
                Assisted in the design and implementation of automation systems
                while learning modern development workflows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
