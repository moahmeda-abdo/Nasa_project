import React from "react";
import { data } from "../../data/data";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import ViewOnScroll from "../motion";
export default function StarShip() {
  return (
    <ViewOnScroll>
      <div>
        <div className="main-heading">
          <h1 className="main-h1">StarShips</h1>
        </div>
        <Container>
          <div>
            {data.starShips.map((starship) => (
              <Row>
                <Col md={7}>
                  <div>
                    <img src={starship.path} alt=" " className="image"></img>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="starship-text">
                    <h3 className="starship-name">{starship.name}</h3>
                    <div className="starship-info">{starship.info}</div>
                  </div>
                  <button className="butn btn-1 hover-filled-slide-up">
                    <span>Learn More</span>
                  </button>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </div>
    </ViewOnScroll>
  );
}
