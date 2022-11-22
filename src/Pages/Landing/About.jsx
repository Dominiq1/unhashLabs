import "./styles/About.css";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  const about1 = useRef();
  const about2 = useRef();
  useEffect(() => {
    gsap.to([about1.current, about2.current], {
      scrollTrigger: {
        trigger: container.current,
        start: "top 30%",
      },
      ease: Power3.easeInOut,
      x: 0,
      opacity: 1,
      stagger: 0.8,
      duration: 0.8,
    });
  }, []);

  return (
    <div ref={container} className="container">
      <div className="about-div">
        <div className="about-row">
          <img src="/about1.png" alt="" />
          <div ref={about1} className="right-about-row">
            <div className="about-icon">
              <img
                style={{
                  backgroundColor: "rgba(156, 86, 253, 0.4)",
                  backgroundImage: "linear-gradient(120deg, #8325e7, #5956fd)",
                }}
                src="/setting.png"
                alt=""
              />
              <div
                style={{ backgroundColor: "#5956fd" }}
                className="about-line"
              ></div>
            </div>
            <h2>Unhash Labs Has You Covered</h2>
            <p>
              We take pride in our work and will do whatever it takes to be the
              driving force behind your company's success. <br />{" "}
              We'll take the reigns and get you the exposure and expertise you need to take
              your company to the next level!
            </p>
            {/* <button className="cta-btn reverse-btn ">Learn more</button> */}
          </div>
        </div>
        <div className="about-row">
          <img src="/about2.png" alt="" />
          <div ref={about2} className="right-about-row">
            <h3>A-Z Media & Marketing Solutions</h3>
            <h2>Unhash Labs is more than a marketing company.</h2>
            <div className="about-icon">
              <img
                style={{
                  backgroundColor: "rgba(89, 86, 253, 0.43)",
                  backgroundImage: "linear-gradient(131deg, #5956fd, #2fb9f8)",
                  marginTop: "10px",
                }}
                src="/pencil.png"
                alt=""
              />
              <div
                style={{ backgroundColor: "#465D04" }}
                className="about-line"
              ></div>
            </div>

            <p>
              Our design team is a creative powerhouse, we'll work with you to
              bring your vision to life.
            </p>

            <div className="about-icon">
              <img
                style={{
                  backgroundColor: "rgba(253, 183, 86, 0.16)",
                  backgroundImage: "linear-gradient(135deg, #ff5e00, #ffae00)",
                }}
                src="/dropper.png"
                alt=""
              />
              <div
                style={{ backgroundColor: "#ff9500" }}
                className="about-line"
              ></div>
            </div>
            <p>
              Our full stack marketing & development approach is systemized so we can help
              attain maximum exposure across social media and search platforms
              so you can dominate your marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
