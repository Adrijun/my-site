import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../../scss/About.scss';
import profileImage from '../../assets/images/profil1.bw.jpg';
import downLoadIcon from '../../assets/icons/download.svg';
function About() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col
            md={12}
            lg={12}
            className="mb-3 project-wrapper anonymous-portfolio d-flex align-items-center"
          ></Col>
          <Container className="box shadow rounded p-2 mb-1">
            <h2>My Portfolio</h2>
            <Row lg={2}>
              <Col md={6} lg={6}>
                <div className="image-portfolios">
                  <img
                    src={profileImage}
                    alt="Placeholder"
                    className="img-fluid mb-3 image-portfolio"
                  />
                </div>
              </Col>
              <Col md={6} lg={6}>
                <article className="box shadow rounded p-2 mb-1 projectsContent">
                  <p className="pt-3">
                    You can download my CV for more detailed information about
                    my experiences and skills. If you have any questions or if
                    you'd like to discuss how I can support your organization,
                    I'd be more than happy to hear from you.
                  </p>
                  <div className="button-group">
                    <a
                      href="/assets/documents/CV.pdf"
                      download="CV.pdf"
                      className="btn btn-outline-light mt-3 mr-2"
                    >
                      <Image
                        src={downLoadIcon}
                        style={{ marginRight: '10px' }}
                      />
                      CV (Swe)
                    </a>
                    <a
                      href="/assets/documents/CV.pdf"
                      download="CV.pdf"
                      className="btn btn-outline-light mt-3 me-3"
                    >
                      <Image
                        src={downLoadIcon}
                        style={{ marginRight: '10px' }}
                      />
                      CV (Eng)
                    </a>
                  </div>
                </article>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default About;
