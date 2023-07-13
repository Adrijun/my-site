import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import portfolioImage from '../../../assets/images/marten-bjork-6dW3xyQvcYE-unsplash.jpg';

export default function Portfolio() {
  const projectRef = useRef(null);
  return (
    <Container className="box shadow rounded p-2 mb-1">
      <h2>My Portfolio</h2>
      <Row lg={2}>
        <Col md={6} lg={6}>
          <div className="image-portfolios">
            <img
              src={portfolioImage}
              alt="Placeholder"
              className="img-fluid mb-3 image-portfolio"
            />
          </div>
        </Col>
        <Col md={6} lg={6}>
          <div className="projectsContent">
            <p>
              This is my portfolio I will continuously post new projects in my
              portfolio so that visitors can always see what I have been working
              on lately. In this project I use React, Typescript and Bootstrap
              to build and design the page. My portfolio is not only a place for
              me to showcase my projects and skills. It is also a place for me
              to learn new things. By working with new techniques and design
              patterns in my portfolio, I can develop my skills and strengthen
              my weaknesses.
            </p>
            <div className="button-group">
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
