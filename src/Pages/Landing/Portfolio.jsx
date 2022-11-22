import "./styles/Portfolio.css";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();

  useEffect(() => {
    const portCol = document.querySelectorAll(".port-col");
    gsap.to(portCol, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
      ease: Power3.easeOut,
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 0.5,
    });
  }, []);
  return (
    <div ref={container} className="container portfolio">
      <div className="port-overlay">
        <div className="left-port"></div>
        <div className="port-circle1 port-circle"></div>
        <div className="port-circle2 port-circle"></div>
        <div className="port-circle3 port-circle"></div>
      </div>
      <div className="portfolio-div">
        <div className="port-col">
          <h2>148+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="port-col">
          <h2>87+</h2>
          <p>Completed Projects</p>
        </div>
        <div className="port-col">
          <h2>376+</h2>
          <p>Cups Of Coffee</p>
        </div>
        <div className="port-col">
          <h2>11+</h2>
          <p>Members</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
