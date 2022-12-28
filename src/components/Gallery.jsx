import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import styled from "styled-components";
import "./Gallery.css";
const IntroSubTitle = styled.p`
  font-size: 1.8rem;
  text-align: center;
  margin: 20px 0;
  letter-spaicing: -1px;
`;
function Gallery() {
  return (
    <div>
      <div className="introHeader">
        <h2 className="menuHeader">Enjoying Pizza Shop</h2>
        <IntroSubTitle>Pizza delivers happiness</IntroSubTitle>
      </div>
      <div className="cardBox">
        <Card style={{ width: "18rem" }} className="cardBody">
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Sauce</Card.Title>
            <Card.Text>pizza shot was developed for a long study.</Card.Text>
            <Button variant="warning">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="cardBody">
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>With my family!</Card.Title>
            <Card.Text>Try eating pizza with your family It's even more delicious</Card.Text>
            <Button variant="warning">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="cardBody">
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>Enjoy your time at the party</Card.Title>
            <Card.Text>Pizza is easy to order at a gathering Enjoy it with many people</Card.Text>
            <Button variant="warning">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Gallery;
