import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "./TemplateDetail.css";
import data from "../data/data";
import styled from "styled-components";
import { addItem } from "../components/store";
import TemplateDetailTab from "../components/TemplateDetailTab";
import { useDispatch } from "react-redux";
const TotalPrice = styled.dd`
  font-size: 2rem;
  font-weight: bold;
  color: darkorange;
`;

function TemplateDetail({ slide }) {
  let { id } = useParams();
  const [productItemList] = useState(data);
  const [item, setProductItem] = useState();
  const dispatch = useDispatch();
  const productInfo = productItemList[id];
  // 초기 실행
  useEffect(() => {
    // ID에 맞는 데이터를 가져오기
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // 아이디를 가지고 데이터를 조회한다.
  // 상품 조회 API가 있을것 (현재는 파일쓰기로 함)
  // 그 API를 보통 상품의 PK가 존재하는데, 이 PK가 즉 위의 ID
  // 그것을 통해 데이터를 가지고 온다.
  // 1. API를 통해 상품을 조회한다.
  const getProductDetail = () => {
    // 스테이트에 세팅
    setProductItem(productInfo);
  };

  //화면 전환 애니메이션
  const [ani, setAni] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAni("end");
    }, 100);
    return () => {
      setAni("");
    };
  }, [slide]);

  return (
    <div className={"row gx-0 content fadeIn " + ani}>
      <div className="detailImageBox col-md-auto">
        <img src={item?.img} alt="productDetail img" />
      </div>
      <div className="col-md-auto">
        <div className="detailText col-md-auto">
          <dl>
            <dt>{item?.title}</dt>
            {/*옵셔널체이닝*/}
            <dd>{item?.content}</dd>
            <TotalPrice>${item?.price?.toLocaleString()}</TotalPrice>
            <Link to="/react/cart">
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(addItem({ id: item?.id, title: item?.title, price: item?.price, count: 1 }));
                }}
              >
                ORDER!
              </button>
            </Link>
          </dl>
        </div>
        <div className="topping col-md-auto">
          <SideMenu />
        </div>
      </div>
      <TemplateDetailTab />
    </div>
  );
}
export default TemplateDetail;
