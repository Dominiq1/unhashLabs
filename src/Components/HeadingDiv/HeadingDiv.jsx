import "./HeadingDiv.css";

const HeadingDiv = ({ heading, sub }) => {
  return (
    <div className="heading-div">
      <img src="/heading-top.png" alt="" />
      <h3>{sub}</h3>
      <h2>{heading}</h2>
    </div>
  );
};

export default HeadingDiv;
