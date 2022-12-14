import "./App.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Event from "./pages/Event";
import Event1 from "./pages/Event1";
import Event2 from "./pages/Event2";
import Event3 from "./pages/Event3";
import Template from "./pages/Template";
import About from "./pages/About";
import TemplateDetail from "./pages/TemplateDetail";
import mainImg from "./images/main.jpg";
import logo from "./images/logo.png";
import MainMenu from "./components/MainMenu";
// import data from "./data/data";

// 상품 등록 과정
// 1. 상품을 작성 후, 등록을 한다.
// 2. 등록을 한 상품이 DB혹은 파일에 저장이되어야 한다.
// 3. 그 저장이 된 정보를 가지고 상품 조회를 한다.

function App() {
  // const [item] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <header>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="Navbar" fixed="top">
          <Container className="justify-content-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav.Link
              className="justify-content-start"
              onClick={() => {
                navigate("/react");
              }}
            >
              <h1 className="logo">
                <img src={logo} alt="로고" />
                <span>Pizza shop</span>
              </h1>
            </Nav.Link>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link
                  onClick={() => {
                    navigate("/react/menu");
                  }}
                  className="menu"
                >
                  <h2 className="navMenu">MENU</h2>
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/react/about");
                  }}
                  className="about"
                >
                  <h2 className="navMenu">ABOUT</h2>
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/react/event");
                  }}
                  className="event"
                >
                  <h2 className="navMenu">EVENT</h2>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Routes>
        {/* <Route path="/react" element={<div className="main-bg" />} /> */}
        <Route
          path="/react"
          element={
            <div>
              <img src={mainImg} alt="main" className="mainImg" />
              <MainMenu />
              <Link to="/react/menu">dd</Link>
            </div>
          }
        />
        <Route path="/react/menu" element={<Template />} />
        <Route path="/react/menu/:id" element={<TemplateDetail />} />
        <Route path="/react/about" element={<About />} />
        <Route path="/react/event" element={<Event />}>
          <Route path="/react/event/event1" element={<Event1 />} />
          <Route path="/react/event/event2" element={<Event2 />} />
          <Route path="/react/event/event3" element={<Event3 />} />
        </Route>
        <Route path="*" element={<div>주소가 잘못되었습니다.</div>} /> {/*404페이지 만들기 */}
      </Routes>

      <></>
    </div>
  );
}

export default App;
