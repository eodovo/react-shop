import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Event from "./pages/Event";
import Event1 from "./components/Event1";
import Event2 from "./components/Event2";
import Event3 from "./components/Event3";
import Template from "./pages/Template";
import About from "./pages/About";
import TemplateDetail from "./pages/TemplateDetail";
import logo from "./images/logo.png";
import MainMenu from "./components/MainMenu";
import ScrollToTop from "./components/ScrollTop";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import MainSlide from "./components/MainSlide";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

// 상품 등록 과정
// 1. 상품을 작성 후, 등록을 한다.
// 2. 등록을 한 상품이 DB혹은 파일에 저장이되어야 한다.
// 3. 그 저장이 된 정보를 가지고 상품 조회를 한다.

function App() {
  let navigate = useNavigate();
  const ani = ""; //애니메이션 프롭스 넘기기

  //localstorage 세팅
  useEffect(() => {
    const data = localStorage.setItem("watched", JSON.stringify([]));
    return () => {
      if (data?.length > 1) {
        return false;
      }
    };
  }, []);

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
              {/* depth에 애니메이션 부여 */}
              <Nav fadeani={ani}>
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
                <Nav.Link
                  onClick={() => {
                    navigate("/react/cart");
                  }}
                >
                  <h2 className="navMenu">
                    CART
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </h2>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <ScrollToTop />
      <Routes>
        {/* 메인 인덱스 엘리먼트 */}
        <Route
          path="/react"
          element={
            <div>
              <MainSlide />
              <MainMenu />
              {/* 메뉴 더보기 라우터 이동 */}
              <Nav.Link
                className="mainMore"
                onClick={() => {
                  navigate("/react/menu");
                }}
              >
                MORE
              </Nav.Link>
              <Gallery />
              <Faq />
            </div>
          }
        />
        <Route path="/react/menu" element={<Template />} />
        <Route path="/react/menu/:id" element={<TemplateDetail />} />
        <Route path="/react/cart" element={<Cart />} />
        <Route path="/react/about" element={<About />} />
        <Route path="/react/event" element={<Event />}>
          <Route path="/react/event/event1" element={<Event1 />} />
          <Route path="/react/event/event2" element={<Event2 />} />
          <Route path="/react/event/event3" element={<Event3 />} />
        </Route>
        <Route path="*" element={<div>주소가 잘못되었습니다.</div>} /> {/*404페이지 만들기 */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
