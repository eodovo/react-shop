import "./App.css";
import Template from "./pages/Template";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Nav, Link, useNavigate, Outlet } from "react-router-dom";
function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <header>
        <Navbar bg="primary" variant="dark" className="Navbar">
          <Container>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                <h1 className="logo">Pizza shop</h1>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/menu");
                }}
                className="menu"
              >
                <h2>MENU</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/about");
                }}
                className="about"
              >
                <h2>ABOUT</h2>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Routes>
        <Route path="/" element={<div className="main-bg" />} />
        <Route path="/menu" element={<Template />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
        <Route path="*" element={<div>없는페이지임</div>} /> {/*404페이지 만들기 */}
      </Routes>
    </div>
  );
}

export default App;
