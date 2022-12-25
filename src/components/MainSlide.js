import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import main1 from "../images/main1.png";
import main2 from "../images/main2.png";
import main3 from "../images/main3.png";
import "./MainSlide.css";
const Head = styled.p`
  font-size: 5vw;
  font-weight: bold;
`;
function MainSlide() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100 main" src={main1} alt="First slide" />
        <Carousel.Caption className="caption">
          <Head>Taste the Best Pizza</Head>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 main" src={main2} alt="second slide" />

        <Carousel.Caption className="caption">
          <Head>Enjoy a variety of pizzas</Head>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 main" src={main3} alt="third slide" />

        <Carousel.Caption className="caption">
          <Head>This pizza is the best choice</Head>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlide;
