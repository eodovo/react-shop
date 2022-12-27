import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { increase, decrease, deleteItem } from "./store";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart({ fadeani }) {
  const [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [fadeani]);
  let basket = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div className={"fadeAni " + fade}>
      <Table className="cartTable" striped bordered>
        <caption>
          <Button
            className="back"
            variant="danger"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              navigate(-2);
            }}
          >
            Go to menu
          </Button>
        </caption>
        <thead>
          <tr>
            <th>Product code</th>
            <th>Product name</th>
            <th>Price</th>
            <th>EA</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody className="cartBody">
          {basket.cart.map((bsk_item) => (
            <tr key={bsk_item.id}>
              <td>{bsk_item.id}</td>
              <td>{bsk_item.title}</td>
              <td>${bsk_item.price.toLocaleString()}</td>
              <td>{bsk_item.count}EA</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => {
                    dispatch(increase(bsk_item.id));
                  }}
                >
                  To add
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(decrease(bsk_item.id));
                  }}
                >
                  To subtract
                </Button>
                <CloseButton
                  onClick={() => {
                    dispatch(deleteItem(bsk_item.id));
                  }}
                ></CloseButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
