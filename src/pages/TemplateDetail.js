import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TemplateDetail.css";

function TemplateDetail(props) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
    console.log(2);
    return () => {
      console.log(1);
      // clearTimeout(a);
    };
  });

  let { id } = useParams();
  const product = props.title[id];

  return (
    <div className="row gx-0 content">
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div>{show === true ? <div>ㅎㅇ ㅋㅋ 2초안에사면 공짜</div> : null}</div>
      <div className="detailImageBox col-md-auto">
        <img src={product.img} alt="productDetail img" />
      </div>
      <div className="col-md-auto">
        <div className="detailText col-md-auto">
          <dl>
            <dt>{product.title}</dt>
            <dd>{product.content}</dd>
            <dd>${product.price.toLocaleString()}</dd>
            <button className="btn btn-danger">ORDER!</button>
          </dl>
        </div>
        <div className="topping col-md-auto">내용 추가</div>
      </div>
    </div>
  );
}
export default TemplateDetail;
