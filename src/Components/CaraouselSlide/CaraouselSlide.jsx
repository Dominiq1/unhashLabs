import "./CaraouselSlide.css";

const CaraouselSlide = ({ img, text }) => {
  
  return (
    <div className="slide-container">
      <img src={img} alt="" />
      <div className="slide-div">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default CaraouselSlide;
