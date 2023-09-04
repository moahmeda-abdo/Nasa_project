import React from "react";
import { data } from "../../data/data";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container.js";
import ViewOnScroll from "../motion";
export default function Team() {
  return (
    <ViewOnScroll>
      <div className="section">
        <Container className="large-container">
          <main>
            <div className="main-heading">
              <h1 className="main-h1">Team Member</h1>
            </div>

            <Row>
              {data.team.map((member) => (
                <Col sm={6} md={4} lg={3} className="mb-3">
                  <Card className="team-card">
                    <Card.Img variant="top" src={member.Image} />
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Text>{member.jop}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </main>
        </Container>
      </div>
    </ViewOnScroll>
  );
}
