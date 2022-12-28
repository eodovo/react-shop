import { useState, useEffect } from "react";
import "./TemplateDetailTab.css";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
const Text = styled.p`
  font-size: 2em;
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid;
  padding: 20px 0;
`;
function TemplateDetailTab() {
  let [tab, onChangeTab] = useState(0);

  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              onChangeTab(0);
            }}
          >
            Nutrition information
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              onChangeTab(1);
            }}
          >
            Product information
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              onChangeTab(2);
            }}
          >
            Allergic ingredients
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tabcontent tab={tab} />
    </>
  );
}
function Tabcontent({ tab }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"fade1 " + fade}>
      {
        [
          <table className="Nutirition">
            <thead className="NutiritionHead">
              <tr>
                <th scope="col">Total Weight</th>
              </tr>
              <tr>
                <th>1 intake reference 2 pieces</th>
              </tr>
              <tr>
                <th>Calories</th>
              </tr>
              <tr>
                <th>Sugar</th>
              </tr>
              <tr>
                <th>Protein</th>
              </tr>
              <tr>
                <th>saturated</th>
              </tr>
              <tr>
                <th>Sodium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>740</td>
                <td>2 pieces (184 g) / 4 servings</td>
                <td>465</td>
                <td>7</td>
                <td>25</td>
                <td>9</td>
                <td>780</td>
              </tr>
            </tbody>
          </table>,
          <div className="tabContent">
            <Text>The price of premium pizza is based on no edge. The price of mania pizza is based on the original edge.</Text>
          </div>,
          <div className="tabContent">
            <Text>Eggs, milk, soybeans, wheat, tomatoes, beef, shellfish (oysters),milk, wheat,Wheat, crustaceans, meat, fish, fruit, buckwheat, etc</Text>
          </div>,
        ][tab]
      }
    </div>
  );
}

export default TemplateDetailTab;
