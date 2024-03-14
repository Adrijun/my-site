import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import postitbajen from '../../../assets/images/postitbajen.jpg';
import OpenInNewWindow from '../../../utils/OpenInNewWindow';
function DigiPlanner() {
  return (
    <Container className="box shadow rounded p-2 mb-1 project-wrapper">
      <h2 id="digiplanner">DigiPlanner</h2>
      <Row>
        <Col md={6} lg={4}>
          <div className="image-portfolios">
            <img
              src={postitbajen}
              alt="Placeholder"
              className="img-fluid mb-3 image-portfolio"
            />
          </div>
        </Col>
        <Col md={6} lg={8}>
          <article className="projectsContent">
            <p>
              This is a digital planning and brainstorming application where
              users can create and organise ideas and tasks with coloured notes.
              By dragging and dropping the notes, users can easily organise
              their lists and prioritise tasks. By pressing a button, they can
              see their progress with a progress bar. In this project, I have
              also taken the opportunity to work with colours and used dnd-kit
              for drag-and-drop functionality. The site is built with React and
              React Bootstrap, providing a user-friendly and responsive design.{' '}
              <br />
              <OpenInNewWindow
                link="https://dndkit.com/"
                buttonText="dnd kit"
              />
            </p>
            <div className="button-group">
              <OpenInNewWindow
                link="https://digiplanner.vercel.app/notes"
                buttonText="Live Demo"
              />
              <OpenInNewWindow
                link="https://github.com/Adrijun/digiplanner"
                buttonText="Github Repo"
              />
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default DigiPlanner;
