import { useParams } from "react-router-dom";
import "./TemplateDetail.css";
function TemplateDetail(props) {
  let { id } = useParams();
  const imgSrc = props.title[id].img;

  return (
    <div className="row gx-0 content">
      <div className="detailImageBox col-md-auto">
        <img src={imgSrc} alt="productDetail img" />
      </div>
      <div className="col-md-auto">
        <div className="detailText col-md-auto">
          <dl>
            <dt>{props.title[id].title}</dt>
            <dd>{props.title[id].content}</dd>
            <dd>${props.title[id].price.toLocaleString()}</dd>
            <button className="btn btn-danger">ORDER!</button>
          </dl>
        </div>
        <div className="topping col-md-auto">내용 추가</div>
      </div>
    </div>
  );
}
export default TemplateDetail;
