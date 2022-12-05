import "./Template.css";
import { useState } from "react";
import data from "../components/data";

function Template() {
  const [title] = useState(data); //데이터 값 불러오기

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
        <div className="row">
          {title.map((a, i) => {
            //객체배열 인덱싱하기
            return (
              <div className="col-md-4" key={i}>
                <img src={title[i].img} alt="pizza_img" className="product" />
                <dl>
                  <dt>{title[i].title}</dt>
                  <dd>{title[i].content}</dd>
                  <dd>${title[i].price.toLocaleString()}</dd> {/*세자리 수 쉼표처리*/}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Template;
