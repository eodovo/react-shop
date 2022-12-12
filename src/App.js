import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Event from "./pages/Event";
import Event1 from "./pages/Event1";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";
import Template from "./pages/Template";
import About from "./pages/About";
import TemplateDetail from "./pages/TemplateDetail";
import data from "./data/data";
import { useState } from "react";

function App() {
  const [item] = useState(data);
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
                <h2 className="navMenu">MENU</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/about");
                }}
                className="about"
              >
                <h2 className="navMenu">ABOUT</h2>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/event");
                }}
                className="event"
              >
                <h2 className="navMenu">EVENT</h2>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Routes>
        <Route path="/" element={<div className="main-bg" />} />
        <Route path="/menu" element={<Template />} />
        <Route path="/menu/:id" element={<TemplateDetail item={item} />} />;
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />}>
          <Route path="event1" element={<Event1 />} />
          <Route path="event2" element={<Event2 />} />
          <Route path="event3" element={<Event3 />} />
        </Route>
        <Route path="*" element={<div>주소가 잘못되었습니다.</div>} /> {/*404페이지 만들기 */}
      </Routes>
    </div>
  );
}

export default App;
