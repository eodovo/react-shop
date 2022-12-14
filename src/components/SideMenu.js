import { useState } from "react";
import side from "../data/side.json";
import styled from "styled-components";

const SideBox = styled.ul`
  background-color: #009223;
  color: #fff;
  border-radius: 20px;
  min-width: 551px;
  display: flex;
  justify-content: center;
`;

const SideImg = styled.img`
  width: 150px;
  display: inline-block;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
const Price = styled.span`
  margin: 9% 0;
  display: inline-block;
  font-size: 20px;
`;

function SideMenu() {
  const [data] = useState(side);

  return (
    <SideBox>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <li>
              <SideImg src={item?.img} alt="side img" />
              <Title>{item?.title}</Title>
              <Price>${item?.price.toLocaleString()}</Price>
            </li>
          </div>
        );
      })}
    </SideBox>
  );
}

export default SideMenu;
