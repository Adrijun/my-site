import React, { useRef } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import majojo from '../../../assets/images/Majojo.jpg';

export default function Restaurant() {
  const projectRef = useRef(null);
  return (
    <Container className="box shadow rounded p-2 mb-1">
      <h2>The restaurant</h2>
      <Row lg={2}>
        <Col md={6} lg={6}>
          <div className="image-portfolios">
            <img
              src={majojo}
              alt="Placeholder"
              className="img-fluid mb-3 image-portfolio"
            />
          </div>
        </Col>
        <Col md={6} lg={6}>
          <div className="projectsContent">
            <p>
              This is my first group project in school where we created a
              website for a local restaurant. The website includes a booking
              function for guests to reserve tables and an admin login for
              managing bookings. We utilized React and Sass for development,
              ensuring a seamless user experience and visually appealing design.
            </p>
            <div className="button-group">
              <Button
                className="BtnLink mt-3"
                href="https://anonymous-pi.vercel.app/"
                variant="outline-light m-1"
              >
                Visit Website
              </Button>
              <Button
                className="BtnLink mt-3"
                href="https://github.com/Adrijun/React-Konva"
                variant="outline-light m-1"
              >
                Github Repo
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
