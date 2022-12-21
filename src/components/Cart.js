import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { increase, decrease, deleteItem } from "./store";

function Cart() {
  let basket = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <Table className="cartTable" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {basket.cart.map((bsk_item) => (
            <tr key={bsk_item.id}>
              <td>{bsk_item.id}</td>
              <td>{bsk_item.title}</td>
              <td>{bsk_item.price}</td>
              <td>{bsk_item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increase(bsk_item.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(decrease(bsk_item.id));
                  }}
                >
                  ----
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteItem(bsk_item.id));
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
