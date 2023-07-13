import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../scss/Projects.scss';
import Anonymous from './Projects/Anonymous';
import Restaurant from './Projects/Restaurant';
import Portfolio from './Projects/Portfolio';
function Projects() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col
            md={12}
            lg={12}
            className="mb-3 project-wrapper anonymous-portfolio d-flex align-items-center"
          >
            <Anonymous />
          </Col>
          <Col md={12} lg={12} className="mb-3 project-wrapper ">
            <Restaurant />
          </Col>
          <Col md={12} lg={12} className="mb-3 project-wrapper">
            <Portfolio />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
