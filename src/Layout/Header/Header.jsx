import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const [header, setHeader] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    if (linkClicked) {
      setTimeout(() => {
        setLinkClicked(false);
      }, 1000);
    }
  }, [linkClicked]);
  useEffect(() => {
    if (header) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [header]);
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.querySelector(".nav").style.height = `${vh}px`;

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.querySelector(".nav").style.height = `${vh}px`;
    });
  }, []);

  return (
    <div className="header-wrapper container">
      <header>
        <img src="/logo.png" alt="" />
        <div onClick={() => setHeader((prev) => !prev)} className="menu-icon">
          <FontAwesomeIcon icon={!header ? faBars : faXmark} />
        </div>
        {header ? <div className="overlay"></div> : ""}
        <nav className={`${header ? "open-nav" : ""} nav`}>
          <div className="flex">
            <a
              className={activeLink === "home" ? "active-link" : ""}
              onClick={() => {
                setLinkClicked(true);
                setHeader(false);
                setActiveLink("home");
              }}
              href="#"
            >
              Home
            </a>
            <a
              className={activeLink === "service" ? "active-link" : ""}
              onClick={() => {
                setLinkClicked(true);
                setHeader(false);
                setActiveLink("service");
              }}
              href="https://calendly.com/unhashlabs" target={"_blank"}
            >
              Get in touch
            </a>
          </div>
          <div className="bottom-nav">
            <div className="nav-row">
              <div className="nav-col">
                <h3>Headquarters</h3>
                <p>
                 Los Angeles, CA
                </p>
              </div>
              <div className="nav-col mobile">
                <h3>Say Hi</h3>
                <a href="mailto:unhashlabs@gmail.com">unhashlabs@gmail.com</a>
                <a href="tel:3056146426">+1 305 614 6426</a>
              </div>
              <div className="nav-col desktop">
                <h3>Social</h3>
                <p>You can always find us on social.</p>
                <div className="social-div-nav">


                <a target={'_blank'} href='https://www.facebook.com/profile.php?id=100087222321899&mibextid=LQQJ4d'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target={'_blank'} href="https://mobile.twitter.com/unhashlabs">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/company/unhashlabs/" target={"blank"}>
            <FontAwesomeIcon icon={faLinkedinIn} />
             </a>
                <a target={'_blank'} href="https://mobile.twitter.com/unhashlabs">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                
                </div>
              </div>
            </div>
            <div className="nav-col desktop">
              <h3>Say Hi</h3>
              <a href="mailto:unhashlabs@gmail.com">unhashlabs@gmail.com</a>
            </div>
            <div className="nav-col mobile">
              <h3>Social</h3>
              <p>You can always find us on social.</p>
              <div className="social-div-nav">
                <a target={'_blank'} href='https://www.facebook.com/profile.php?id=100087222321899&mibextid=LQQJ4d'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target={'_blank'} href="https://mobile.twitter.com/unhashlabs">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.linkedin.com/company/unhashlabs/" target={"blank"}>
            <FontAwesomeIcon icon={faLinkedinIn} />
             </a>
                <a target={'_blank'} href="https://mobile.twitter.com/unhashlabs">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`side-swipe ${linkClicked ? "active-swipe" : ""}`}
        ></div>
      </header>
    </div>
  );
};

export default Header;
