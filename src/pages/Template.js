import "./Template.css";
import { useState } from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
function Template() {
  const [title, setTitle] = useState(data); //데이터 값 불러오기

  function downPriceSort() {
    //가격정렬 sort문법 안에 연산을 해야함.
    return [...title].sort((a, b) => a.price - b.price);
  }
  function upPriceSort() {
    return [...title].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="template">
      <div className="container">
        <header>
          <h2 className="menuHeader">MENU</h2>
          <p>
            The world's number one brand, Pizzashop!
            <br />
            Taste the world's best pizza with a 50-year history!
          </p>
        </header>
        <div className="sort col">
          <Button
            variant="outline-danger"
            onClick={() => {
              setTitle(upPriceSort());
            }}
          >
            High price order
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              setTitle(downPriceSort());
            }}
          >
            Low price order
          </Button>
        </div>
        <div className="row">
          {title.map((product) => {
            //객체배열 인덱싱하기
            return (
              <div className="col-md-4" key={product.id}>
                <Link to={`/menu/${product.id}`}>
                  {/*상세페이지 이동*/}
                  <img src={product.img} alt="pizza_img" className="product" />
                </Link>
                <dl>
                  <dt>{product.title}</dt>
                  <dd>{product.content}</dd>
                  <dd>${product.price.toLocaleString()}</dd> {/*세자리 수 쉼표처리*/}
                </dl>
              </div>
            );
          })}
          <Button
            variant="outline-danger col-md-2 more"
            onClick={() => {
              axios
                .get("https://raw.githubusercontent.com/eodovo/react-shop/main/src/components/data2.json")
                .then((result) => {
                  const moreProudct = [...title, ...result.data];
                  setTitle(moreProudct);
                })
                .catch(() => {
                  alert("데이터를 받는데에 실패했습니다.");
                });
            }}
          >
            MORE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Template;
