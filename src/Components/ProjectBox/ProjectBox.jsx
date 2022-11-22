import "./ProjectBox.css";

const ProjectBox = ({ img, name, url }) => {
  return (
    <div className="project-box">
      <img src={img} alt="" />
      <div className="project-overlay"></div>
      <div className="project-desc">
        <a target={"blank"} href={url} className="website">
          Website
        </a>
        <div className="project-line"></div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default ProjectBox;
