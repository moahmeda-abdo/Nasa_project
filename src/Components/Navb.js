import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


function Navb() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = prevScrollPos > currentScrollPos;


      const threshold = 50;

      if (currentScrollPos < threshold) {
        setVisible(true);
      } else if (isScrolledUp) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navClass = visible ? "nav" : "nav nav-hidden";

  return (
    <>
      <Navbar expand="lg" className={navClass}>
        <Container>
          <Navbar.Brand>
            <Link to="/">NASA Team</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="#home" className="nav-link">
                Home
              </Link>
              <Link to="#link" className="nav-link">
                Link1
              </Link>
              <Link to="#home" className="nav-link">
                Link2
              </Link>
              <Link to="#link" className="nav-link">
                Link3
              </Link>
              <Link to="#home" className="nav-link">
                Link4
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;