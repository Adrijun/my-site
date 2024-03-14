import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../scss/Projects.scss';
import Anonymous from './Projects/Anonymous';
import Restaurant from './Projects/Restaurant';
import Portfolio from './Projects/Portfolio';
import WeatherForecast from './Projects/WeatherForecast';
import DigiPlanner from './Projects/DigiPlanner';
function Projects() {
  return (
    <>
      <Container className="mt-2 main-projects">
        <Row>
          <Col
            md={12}
            lg={12}
            className="mb-3  anonymous-portfolio d-flex align-items-center"
          >
            <DigiPlanner />
          </Col>
          <Col md={12} lg={12} className="mb-3">
            <WeatherForecast />
          </Col>
          <Col md={12} lg={12} className="mb-3">
            <Anonymous />
          </Col>
          <Col md={12} lg={12} className="mb-3">
            <Restaurant />
          </Col>
          <Col md={12} lg={12} className="mb-3">
            <Portfolio />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
