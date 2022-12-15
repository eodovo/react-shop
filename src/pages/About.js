import { useEffect, useState } from "react";
import manImg from "../images/man.jpg";
import hut from "../images/hut.jpg";
import restraunrant from "../images/restraurant.jpg";
import styled from "styled-components";
import "./About.css";
const Img = styled.img`
  object-fit: cover;
  box-shadow: 10px 10px 10px 1px rgb(0 0 0 / 30%);
`;
const Section1TextBox = styled.dl`
  width: 50%;
  text-align: left;
`;
const Section1Title = styled.dt`
  font-size: 2.5rem;
`;
const Section1subTitle = styled.dd`
  font-size: 1.8rem;
  letter-spacing: -1px;
`;

function About({ fadeAni }) {
  // 애니메이션 효과
  const [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [fadeAni]);
  return (
    <div className={"fadeAni " + fade}>
      <h2 className="menuHeader">ABOUT</h2>
      <p className="introSubtitle">
        To be a customer's favorite place and the best way to enjoy food
        <br /> Pizza shop is working hard today.
      </p>
      <div className="row gx-0 section1">
        <Img src={manImg} alt="imgae" className="col-md-5" />
        <Section1TextBox className="col-md-auto">
          <Section1Title>Dan Carney</Section1Title>
          <Section1subTitle>The brand of the pizza shop was named in 1958 when he lived in Texas, USA It started with Dan Carney. At the time, pizza was an unfamiliar dish for Americans, but Dan Carney had a challenging spirit I started my business with $600.</Section1subTitle>
        </Section1TextBox>
      </div>
      <div className="row gx-0 section2">
        <Img src={hut} alt="imgae" className="col-md-5" />
        <Section1TextBox>
          <Section1Title>The Birth of Pizza shop</Section1Title>
          <Section1subTitle>He set up a small shop in the neighborhood, which had eight windows Here we go. Five windows with the word "PIZZA" on them After thinking about what to put on the three windows, Pizza shop was born.</Section1subTitle>
        </Section1TextBox>
      </div>
      <div className="row gx-0 section3">
        <Img src={restraunrant} alt="imgae" />
        <dl>
          <dt className="col-md-3">
            Pizza shop
            <br /> land in the world
          </dt>
          <dd className="col-md-7">He set up a small shop in the neighborhood, which had eight windows Here we go. Five windows with the word "PIZZA" on them After thinking about what to put on the three windows, Pizza shop was born.</dd>
        </dl>
      </div>
    </div>
  );
}
export default About;
