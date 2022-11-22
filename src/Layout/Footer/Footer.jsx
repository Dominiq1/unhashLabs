import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footer-wrapp">
      <footer>
        <p>
          Secure payment by <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="" />
        </p>
        <h6>
          Created with love by <strong>Unhash Labs</strong> 2022
        </h6>
      </footer>
    </div>
  );
};

export default Footer;
