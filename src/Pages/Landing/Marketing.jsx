import "./styles/Marketing.css";
import gsap, { Power3, Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Marketing = () => {
  const container = useRef();
  const rightMarket = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const marketBoxes = document.querySelectorAll(".market-box");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      },
    });
    timeline.to(marketBoxes, {
      x: 0,
      opacity: 1,
      ease: Power3.easeOut,
      stagger: 0.4,
      duration: 0.8,
      delay: 0,
    });
    timeline.to(
      rightMarket.current,
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: Power3.easeInOut,
      },
      1
    );
  }, []);
  return (
    <div ref={container} className="container marketing">
      <div className="overlay-market">
        <div className="market-circle market-circle1"></div>
        <div className="market-circle market-circle2"></div>
        <div className="solar-div">
          <div className="solar-circle1"></div>
          <div className="solar-dot"></div>
        </div>
      </div>
      <div className="marketing-div">
        <div className="market-grid">
          <div className="market-box">
            <h2>Web Design</h2>
            <p>Bringing Your Vision to Life</p>
            <img src="/market-ico1.png" alt="" />
          </div>
          <div className="market-box">
            <h2>Marketing</h2>
            <p>Full Stack Marketing Solutions</p>
            <img src="/market-ico2.png" alt="" />
          </div>
          <div className="market-box">
            <h2>Consulting</h2>
            <p>We're Here to Help</p>
            <img src="/market-ico3.png" alt="" />
          </div>
          <div className="market-box">
            <h2>Media Creation</h2>
            <p>Pictures, Videos, Renders & More</p>
            <img src="/market-ico4.png" alt="" />
          </div>
        </div>
        <div ref={rightMarket} className="right-market">
          <h2>A true full stack marketing agency</h2>
          <p>
            We offer a wide variety of services including but not limited to :{" "}
            <br /> - Website Design and Development. <br /> - Marketing across
            many platforms such as Facebook, Instagram, Snapchat, Tiktok,
            Google, and Bing. <br /> - Backend re-marketing via Email and SMS.{" "}
            <br /> - Consulting calls tailored to help fuel your companies
            growth. <br /> - Media creation ranging from custom 3d renders,
            videos, pictures, advertisements, product pictures, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
