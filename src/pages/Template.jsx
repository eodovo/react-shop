import "./Template.css";
import { useEffect, useState } from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
function Template({ fadeani }) {
  const [item, setItem] = useState(data); //데이터 값 불러오기
  let [title, setTitle] = useState([]);
  const [moreBtn, countMoreBtn] = useState(0);

  //가격정렬 sort문법 안에 연산을 해야함.
  function downPriceSort() {
    return [...item].sort((a, b) => a.price - b.price);
  }
  function upPriceSort() {
    return [...item].sort((a, b) => b.price - a.price);
  }
  // 애니메이션 효과
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [fadeani]);

  useEffect(() => {
    let recentId = localStorage.getItem("watched");
    recentId = JSON.parse(recentId);
    recentId = recentId.map(Number);
    let copy = [...item];
    let setId = copy.map((a) => a.id);
    let checkId = setId.filter((id) => recentId.includes(id));
    setTitle(checkId);
  }, [item]);

  return (
    <div className={"template fadeAni " + fade}>
      <div className="container">
        <header>
          <h2 className="menuHeader">MENU</h2>
          <p className="introSubtitle">
            The world's number one brand, Pizzashop!
            <br />
            Taste the world's best pizza with a 50-year history!
          </p>
        </header>
        <div className="sort col">
          <Dropdown>
            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
              Recent Product
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {title.map((id) => (
                <Dropdown.Item href={`/react/menu/${id}/`} key={item.id}>
                  {item[id].title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button
            variant="outline-danger"
            onClick={() => {
              setItem(upPriceSort());
            }}
          >
            High price order
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => {
              setItem(downPriceSort());
            }}
          >
            Low price order
          </Button>
        </div>
        <div className="row">
          {item.map((product) => {
            //객체배열 인덱싱하기
            return (
              <div className="col-md-4" key={product.id}>
                <Link to={`/react/menu/${product.id}`} slide={item}>
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
              countMoreBtn(moreBtn + 1);
              if (moreBtn >= 1) {
                alert("상품이 더이상 존재하지 않습니다.");
                return false;
              }

              axios
                .get("https://raw.githubusercontent.com/eodovo/react-shop/main/src/data/data2.json")
                .then((result) => {
                  const moreProudct = [...item, ...result.data];
                  setItem(moreProudct);
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
