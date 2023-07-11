import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../scss/Projects.scss';
import Anonymous from './Projects/Anonymous';
import Restaurant from './Projects/Restaurant';
import Portfolio from './Projects/Portfolio';
function Projects() {
  return (
    <main>
      <Container>
        <h1 className="projects-header-one">Projects</h1>
      </Container>
      <section className="box-wrapper">
        <Container className="mb-5">
          <Row>
            <Col md={12} lg={12} className="mb-5">
              <Anonymous />
            </Col>
            <Col md={12} lg={12} className="mb-5">
              <Restaurant />
            </Col>
            <Col md={12} lg={12} className="mb-5">
              <Portfolio />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Projects;
