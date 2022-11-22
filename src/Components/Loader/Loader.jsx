import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import "./Loader.css";

const Loader = ({ setLoader }) => {
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTransition(true);
    }, 2000);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <div className={`loader ${transition ? "loader-finish" : ""}`}>
      <div className={transition ? "load-finish" : ""}>
        <GridLoader color={"#1be3e4"} />
      </div>
    </div>
  );
};

export default Loader;
