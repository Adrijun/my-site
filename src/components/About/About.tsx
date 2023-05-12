import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../scss/About.scss';
import profileImage from '../../assets/images/profil1.jpg';
function About() {
  return (
    <Container>
      <Row className="justify-content-center p-1 content-wrapper">
        <Col xs={12} md={6}>
          <h1>About me</h1>
          <p id="aboutContent">
            A creative front-end developer with a passion for web design and a
            strong drive to grow within the field.
          </p>
          <Image src={profileImage} fluid />
          <p>
            You can download my CV for more detailed information about my
            experiences and skills. If you have any questions or if you'd like
            to discuss how I can support your organization, I'd be more than
            happy to hear from you.
          </p>

          <a
            href="/assets/documents/CV.pdf"
            download
            className="btn btn-outline-dark"
          >
            Download CV
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
