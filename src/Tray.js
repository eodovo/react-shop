import { useState } from "react";
import data from "./data";
import image0 from "./images/item0.png";
import image1 from "./images/item1.png";
import image2 from "./images/item2.png";
function Tray() {
  useState();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={image0} alt="이미지1" />
            <dl>
              <dt>{data[0].title}</dt>
              <dd>{data[0].content}</dd>
              <dd>{data[0].price}원</dd>
            </dl>
          </div>
          <div className="col-md-4">
            <img src={image1} alt="이미지2" />
            <dl>
              <dt>{data[1].title}</dt>
              <dd>{data[1].content}</dd>
              <dd>{data[1].price}원</dd>
            </dl>
          </div>
          <div className="col-md-4">
            <img src={image2} alt="이미지3" />
            <dl>
              <dt>{data[2].title}</dt>
              <dd>{data[2].content}</dd>
              <dd>{data[2].price}원</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tray;
