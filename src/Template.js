import { useState } from "react";
import data from "./data";
import image0 from "./images/item0.png";
import image1 from "./images/item1.png";
import image2 from "./images/item2.png";
function Template() {
  const [image, setImage] = useState([image0, image1, image2]);
  const [title, setTitle] = useState([data[0].title, data[1].title, data[2].title]);
  const [content, setContent] = useState([data[0].content, data[1].content, data[2].content]);
  const [price, setPrice] = useState([data[0].price, data[1].price, data[2].price]);
  return (
    <div>
      <div className="container">
        <div className="row">
          {title.map((a, i) => {
            return (
              <div className="col-md-4" key={i}>
                <img src={image[i]} alt="이미지1" />
                <dl>
                  <dt>{title[i]}</dt>
                  <dd>{content[i]}</dd>
                  <dd>{price[i]}원</dd>
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
