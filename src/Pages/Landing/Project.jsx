import "./styles/Project.css";
import HeadingDiv from "../../Components/HeadingDiv/HeadingDiv";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";

const Project = () => {
  return (
    <div className="container">
      <div className="project-div">
        <HeadingDiv
          heading="Our Recent Projects"
          sub="BROWSE OUR CLIENT LIBRARY"
        />
        <div className="project-grid">
          <ProjectBox img={"/project1.png"} name="Pear Platform" />
          <ProjectBox img={"/project1.png"} name="Pear Platform" />
          <ProjectBox img={"/project1.png"} name="Pear Platform" />
          <ProjectBox img={"/project1.png"} name="Pear Platform" />
          <ProjectBox img={"/project1.png"} name="Pear Platform" />
          <ProjectBox img={"/project1.png"} name="Pear Platform" />
        </div>
      </div>
    </div>
  );
};

export default Project;
