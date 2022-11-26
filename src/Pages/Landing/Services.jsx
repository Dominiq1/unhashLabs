import "./styles/Services.css";
import HeadingDiv from "../../Components/HeadingDiv/HeadingDiv";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const ServiceBox = ({ img, text, lineColor, container }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceBoxes = document.querySelectorAll(".service-box");
    gsap.to(serviceBoxes, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
      ease: Power3.easeInOut,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
    });
  }, []);

  return (
    <div className="service-box">
      <div className="top-service-box">
        <div
          style={{ backgroundColor: lineColor }}
          className="small-line"
        ></div>
        <img src={img} alt="" />
        <div style={{ backgroundColor: lineColor }} className="main-line"></div>
      </div>
      <p>{text}</p>
    </div>
  );
};

const Services = () => {
  const container = useRef();
  const data = [
    {
      text: "Software Design & Development",
      img: "/Development.png",
      lineColor: "#d656fd",
   
    },
    {
      text: "Graphics and design",
      img: "/design.png",
      lineColor: "#ff9500",
    },
    {
      text: "Instagram Advertising & Campaign Management",
      img: "/instagram.ico",
      lineColor: "#465cff",
    },
    {
      text: "Facebook Advertising & Campaign Management",
      img: "/service-ico4.png",
      lineColor: "#1ec8e2",
    },
    {
      text: "Youtube Advertising & Campaign Management",
      img: "/youtube3d.ico",
      lineColor: "#5956fd",
    },
    {
      text: "TikTok Advertising & Campaign Management",
      img: "/service-ico6.png",
      lineColor: "#56fd7a",
    },
  ];
  return (
    <div ref={container} className="container section-bg">
      <div className="services">
        <HeadingDiv heading="Our Services" sub="We're Here To Help" />
        <div className="service-grid">
          {data.map((elem, idx) => {
            return (
              <ServiceBox
                container={container}
                {...elem}
                key={idx + "service-box"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
