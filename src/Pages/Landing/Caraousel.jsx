import "./styles/Caraousel.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CaraouselSlide from "../../Components/CaraouselSlide/CaraouselSlide";

const Caraousel = () => {
  return (
    <div className="container caraousel">
      <Splide
        options={{
          rewind: true,
          width: "100%",
          pagination: true,
          arrows: false,
          fixedHeight: "70vh",
          breakpoints: {
            1000: {
              fixedHeight: "500px",
            },
          },
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <CaraouselSlide img={"/test-caraousel.jpg"} text="Lorem Ipsum" />
        </SplideSlide>
        <SplideSlide>
          <CaraouselSlide img={"/test-caraousel2.jpg"} text="Lorem Ipsum" />
        </SplideSlide>
        <SplideSlide>
          <CaraouselSlide img={"/test-caraousel3.jpg"} text="Lorem Ipsum" />
        </SplideSlide>
        <SplideSlide>
          <CaraouselSlide img={"/test-caraousel4.jpg"} text="Lorem Ipsum" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Caraousel;
