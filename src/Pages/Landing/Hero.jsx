import "./styles/Hero.css";
import gsap, { Power3, Back } from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const animCircleSmall = useRef(null);
  const animCircleMed = useRef(null);
  const animCircleLarge = useRef(null);

  useEffect(() => {
    const DURATION = 1.2;
    gsap.fromTo(
      animCircleSmall.current,
      {
        opacity: 1,
        scale: 1,
        repeat: -1,
        yoyo: true,
        duration: DURATION,
        ease: Power3.easeInOut,
      },
      {
        ease: Power3.easeInOut,
        opacity: 0,
        scale: 0.75,
        repeat: -1,
        yoyo: true,
        duration: DURATION,
      }
    );
    gsap.fromTo(
      animCircleMed.current,
      {
        ease: Power3.easeInOut,
        opacity: 1,
        scale: 1,
        repeat: -1,
        yoyo: true,
        delay: 0.1,
        duration: DURATION,
      },
      {
        ease: Power3.easeInOut,
        opacity: 0,
        scale: 0.75,
        repeat: -1,
        yoyo: true,
        delay: 0.1,
        duration: DURATION,
      }
    );
    gsap.fromTo(
      animCircleLarge.current,
      {
        ease: Power3.easeInOut,
        opacity: 1,
        scale: 1,
        repeat: -1,
        yoyo: true,
        delay: 0.2,
        duration: DURATION,
      },
      {
        ease: Power3.easeInOut,
        opacity: 0,
        scale: 0.75,
        repeat: -1,
        yoyo: true,
        delay: 0.2,
        duration: DURATION,
      }
    );
  }, []);

  return (
    <div className="hero-wrapp container">
      <div className="white-border-left"></div>
      <div className="circle1 circle"></div>
      <div className="circle2 circle"></div>
      <div className="circle3 circle"></div>
      <div className="dot"></div>
      <div className="landing__hero-div">
        <div className="landing__left-hero">
          <h3>Scale With Us</h3>
          <h2>Unhash Labs</h2>
          <p>Multimedia Design & Development Solutions</p>
          <a className="tag" target={"blank"} href="https://calendly.com/unhashlabs">
          <div className="cta-btn">Get Started</div>
          </a>
        </div>
        <div className="landing__right-hero">
          <div
            ref={animCircleSmall}
            className="anim-circle-small  anim-circle"
          ></div>
          <div
            ref={animCircleMed}
            className="anim-circle-medium  anim-circle"
          ></div>
          <div
            ref={animCircleLarge}
            className="anim-circle-large anim-circle"
          ></div>
          <img src="/hero-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
