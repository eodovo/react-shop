import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import data from "../data/data";
import "./MainMenu.css";
const IntroPrice = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 40px;
`;
const IntroSubTitle = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin: 20px 0;
  letter-spaicing: -1px;
`;
const IntroTitle = styled.h3`
  font-size: 2.3rem;
`;
function MainMenu() {
  let [introItem] = useState(data.splice(-6));

  return (
    <div>
      <div className="introHeader">
        <h2 className="menuHeader">MENU</h2>
        <IntroSubTitle>Let me introduce the menu at the pizza shop</IntroSubTitle>
      </div>
      <Carousel>
        {introItem.map((item) => {
          return (
            <Carousel.Item interval={3000} key={item.id}>
              <img className="d-block w-100" src={item?.img} alt="First slide" />
              <div>
                <Carousel.Caption>
                  <IntroTitle>{item?.title}</IntroTitle>
                  <IntroSubTitle>{item?.content}</IntroSubTitle>
                  <IntroPrice>$ {item?.price.toLocaleString()}</IntroPrice>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MainMenu;
