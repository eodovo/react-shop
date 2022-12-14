import { useState } from "react";
import "./TemplateDetailTab.css";
import Nav from "react-bootstrap/Nav";

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
function Tabcontent(props) {
  if (props.tab === 0) {
    return (
      <div>
        <div className="tabContent">0aasdsdasdasd</div>
      </div>
    );
  } else if (props.tab === 1) {
    return (
      <div>
        <div className="tabContent">1</div>
      </div>
    );
  } else if (props.tab === 2) {
    return (
      <div>
        <div className="tabContent">2</div>
      </div>
    );
  }
}

export default TemplateDetailTab;
