import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="bg-light text-light">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between flex-wrap">
            <Col xs={12} md={4}>
              <Navbar.Brand className="mb-4" href="#home">
                <img src="/Images/TasteBite-Logo.png" alt="logo" width={230} />
              </Navbar.Brand>
              <p>
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment"
              </p>
            </Col>
            <div className="text-start">
              <h5>Tastebite</h5>
              <Nav className="flex-column">
                <Nav.Link href="#AboutUs">About Us</Nav.Link>
                <Nav.Link href="#Careers">Careers</Nav.Link>
                <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
                <Nav.Link href="#Feedback">Feedback</Nav.Link>
              </Nav>
            </div>
            <div>
              <h5>Legal</h5>
              <Nav className="flex-column">
                <Nav.Link href="#home">Terms</Nav.Link>
                <Nav.Link href="#about">Conditions</Nav.Link>
                <Nav.Link href="#services">Cookies</Nav.Link>
                <Nav.Link href="#contact">Copyright</Nav.Link>
              </Nav>
            </div>
            <div>
              <h5>Follow</h5>
              <Nav className="flex-column">
                <Nav.Link href="#facebook">Facebook</Nav.Link>
                <Nav.Link href="#twitter">Twitter</Nav.Link>
                <Nav.Link href="#instagram">Instagram</Nav.Link>
                <Nav.Link href="#YouTube">YouTube</Nav.Link>
              </Nav>
            </div>
          </Col>
        </Row>
        <hr
          className="my-4 border"
          style={{ borderColor: "#8E8E8E", width: "100%" }}
        />
        <Row className="d-flex justify-content-between flex-wrap">
          <Col xs={12} md={10}>
            <p>&copy; 2020 Testbite - All rights reserved</p>
          </Col>
          <Col xs={12} md={2}>
            <Nav className="flex-row justify-content-between">
              <Nav.Link href="#facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
              <Nav.Link href="#twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
              <Nav.Link href="#instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
              <Nav.Link href="#YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
