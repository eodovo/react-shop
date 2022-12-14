import { useState } from "react";
import side from "../data/side.json";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItem } from "./store";

const SideBox = styled.ul`
  background-color: #009223;
  color: #fff;
  border-radius: 20px;
  min-width: 551px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    min-width: 0px;
  }
`;

const SideImg = styled.img`
  width: 150px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
  @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
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
  let dispatch = useDispatch();
  const [data] = useState(side);

  return (
    <SideBox>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <li>
              <SideImg
                src={item?.img}
                alt="side img"
                onClick={() => {
                  dispatch(addItem({ id: item?.id, title: item?.title, price: item?.price, count: 1 }));
                }}
              />

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
