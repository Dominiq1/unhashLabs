import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faVimeoV,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div style={{ backgroundColor: "black" }} className="container">
      <div className="contact-div">
        <img src="/logo.png" alt="" />
        <div className="contact-row">
          <div className="contact-col">
            <h3>Call us</h3>
            <p>Phone: +1 305 614 5426</p>
          </div>
          <div className="contact-col">
            <h3>WRITE US</h3>
            <p>Email: unhashlabs@gmail.com</p>
          </div>
          <div className="contact-col">
            <h3>LOCATE US</h3>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* <a href="#">Privacy Policy</a> */}
        {/* <a href="#">Terms and Conditions</a> */}
        <a href="mailto:unhashlabs@gmail.com">Contact Us</a>
        <div className="social-div">
         
          <a href="https://mobile.twitter.com/unhashlabs" target={"blank"}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/company/unhashlabs/" target={"blank"}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/unhashlabs/" target={"blank"}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100087222321899&mibextid=LQQJ4d" target={"blank"}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          {/* <a href="#" target={"blank"}>
            <FontAwesomeIcon icon={faGoogle} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
