import "./App.css";
import { useState } from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Landing from "./Pages/Landing/Landing";
import Loader from "./Components/Loader/Loader";
import ProgressBar from "react-progressbar-on-scroll";

function App() {
  const [loader, setLoader] = useState(true);

  return (
    <div className="App">
      <ProgressBar
        color="#fff"
        height={5}
        direction="right"
        position="top"
        gradient={false}
      />
      {loader && <Loader setLoader={setLoader} />}
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
