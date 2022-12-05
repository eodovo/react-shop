import "./App.css";
import Template from "./Template";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">PizzaShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Template />
    </div>
  );
}

export default App;
