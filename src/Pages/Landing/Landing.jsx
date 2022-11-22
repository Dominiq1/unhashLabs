import "./styles/Landing.css";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Project from "./Project";
import Contact from "../../Components/Contact/Contact";
import Portfolio from "./Portfolio";
import Marketing from "./Marketing";
import Caraousel from "./Caraousel";

const Landing = () => {
  return (
    <div className="landing">
 
      <Hero />
      <Services />
      <div className="book-wrapper container">
        <div className="book ">
          <h2>Book a free strategy call with our team today!</h2>
          <a className="tag" target={"blank"} href="https://calendly.com/unhashlabs">
          <button  className="reverse-btn cta-btn">Book a call</button>
          </a>
        </div>
      </div>
      <About />
      <Marketing />
      {/* <Project /> */}
      <Portfolio />
      {/* <Caraousel /> */}
      <Contact />
    </div>
  );
};

export default Landing;
