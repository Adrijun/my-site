import React, { useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import anonymPortfolio from '../../../assets/images/anonymPortfoliojpg2.jpg';

function Anonymous() {
  const projectRef = useRef(null);
  return (
    <Container className="box shadow rounded p-2 mb-1 project-wrapper">
      <h2>Anonymous</h2>
      <Row>
        <Col md={6} lg={4}>
          <div className="image-portfolios">
            <img
              src={anonymPortfolio}
              alt="Placeholder"
              className="img-fluid mb-3 image-portfolio"
            />
          </div>
        </Col>
        <Col md={6} lg={8}>
          <div className="projectsContent">
            <p>
              The goal of this project was to develop a function that retrieves
              data with coordinates of individuals, boundaries, and danger
              zones. Using a predefined mapping scheme, the function draws lines
              between key points to represent people and adds bounding boxes
              with labels around each person's discovery. Additionally, the
              function includes a tool to extract specific image sections within
              the bounding boxes and apply a blurred filter over the background
              image. This ensures anonymous rendering of the image, aligning
              with GDPR compliance. The project is built using React,
              TypeScript, and React-Konva.
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

export default Anonymous;
