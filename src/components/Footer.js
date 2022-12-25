import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Card from "react-bootstrap/Card";
import "./Footer.css";
function Footer() {
  return (
    <Card className="footerbar">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">
            <address>
              <p>10220 Alondra Blvd, Bellflower, CA 90706</p>
              <FontAwesomeIcon icon={faPhone} />
              +1&nbsp;562-866-1666
              <p>PizzaShop® is a Registered Trademark of PizzaShop IP LLC. © 2021 PizzaShop IP LLC. All Rights Reserved.</p>
            </address>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default Footer;
