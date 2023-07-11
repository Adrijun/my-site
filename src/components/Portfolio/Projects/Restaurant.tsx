import React, { useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import majojo from '../../../assets/images/Majojo.jpg';

export default function Restaurant() {
  const projectRef = useRef(null);
  return (
    <article className="box shadow rounded p-1 mb-1 projectsArticle">
      <h2 ref={projectRef} id="restaurant">
        The restaurant
      </h2>
      <img
        src={majojo}
        alt="Placeholder"
        className="img-fluid mb-3 image-portfolio"
      />
      <Row className="projectsContent">
        <p>
          This is my first group project in school where we created a website
          for a local restaurant. The website includes a booking function for
          guests to reserve tables and an admin login for managing bookings. We
          utilized React and Sass for development, ensuring a seamless user
          experience and visually appealing design.
        </p>

        <Col xs={6} md={6} className="d-flex flex-column justify-content-end">
          <Button
            className="BtnLink mt-3"
            href="https://anonymous-pi.vercel.app/"
            variant="outline-light m-1 "
          >
            Visit Website
          </Button>
          <Button
            className="BtnLink mt-3"
            href="https://github.com/Adrijun/React-Konva"
            variant="outline-light m-1 "
          >
            Github Repo
          </Button>
        </Col>
      </Row>
    </article>
  );
}
